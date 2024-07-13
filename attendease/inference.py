import argparse
import cv2
import numpy as np
import torch
import pickle
from backbones import get_model

# Load source_images and source_faces from files
source_faces = []

with open('source_faces.pkl', 'rb') as file:
    source_faces = pickle.load(file)

@torch.no_grad()
def inference(weight, name, images):
    embeddings = []  # Create an empty list to store embeddings

    net = get_model(name, fp16=False)
    net.load_state_dict(torch.load(weight))
    net.eval()

    for img in images:
        img = np.array(img)  
        img = cv2.resize(img, (112, 112))
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = np.transpose(img, (2, 0, 1))
        img = torch.from_numpy(img).unsqueeze(0).float()
        img.div_(255).sub_(0.5).div_(0.5)
        feat = net(img)
        feat = feat[0].numpy()
        embeddings.append(feat)

    return embeddings

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='PyTorch ArcFace Training')
    parser.add_argument('--network', type=str, default='r50', help='backbone network')
    parser.add_argument('--weight', type=str, default='')
    args = parser.parse_args()

    # Use the modified inference function to get embeddings for all images in source_faces
    source_embeddings = inference(args.weight, args.network, source_faces)

    # Now, the 'source_embeddings' list contains embeddings for all images in source_faces
    print("Embeddings for all images:", source_embeddings)

    # Save source_embeddings to a file using pickle
    with open('source_embeddings.pkl', 'wb') as file:
        pickle.dump(source_embeddings, file)

    print("Source embeddings saved to 'source_embeddings.pkl'")


from fastapi import FastAPI, File, UploadFile
from pydantic import BaseModel
from starlette.responses import JSONResponse
# from model import find_names 

import argparse
import cv2
import numpy as np
import torch
import pickle
from backbones import get_model
from facenet_pytorch import MTCNN
import torch
from PIL import Image
import numpy as np


# Define MTCNN module
mtcnn = MTCNN(image_size=120, margin=0, min_face_size=20,
    thresholds=[0.8, 0.9, 0.9], factor=0.709, post_process=True,keep_all=True)
# Load source_images and source_embeddings from files
source_images = []
source_embeddings = []

with open('source_images.pkl', 'rb') as file:
    source_images = pickle.load(file)

with open('source_embeddings.pkl', 'rb') as file:
    source_embeddings = pickle.load(file)

# ... (Define findCosineDistance and inference functions) ...
@torch.no_grad()
# Function to crop faces and return as a list of PIL Images
def crop_faces(image, boxes):
    face_images = []
    for box in boxes:
        x1, y1, x2, y2 = box.astype(int)
        face = image.crop((x1, y1, x2, y2))
        face_images.append(face)
    return face_images
def findCosineDistance(source_representation, test_representation):
    a = np.matmul(np.transpose(source_representation), test_representation)
    b = np.sum(np.multiply(source_representation, source_representation))
    c = np.sum(np.multiply(test_representation, test_representation))
    return 1 - (a / (np.sqrt(b) * np.sqrt(c)))
def inference(weight, name, images):
    embeddings = []  # Create an empty list to store embeddings

    net = get_model(name, fp16=False)
    net.load_state_dict(torch.load(weight, map_location='cpu'))
    net.eval()

    for img in images:
        img = np.array(img)  # Convert PIL image to NumPy array
        img = cv2.resize(img, (112, 112))
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = np.transpose(img, (2, 0, 1))
        img = torch.from_numpy(img).unsqueeze(0).float()
        img.div_(255).sub_(0.5).div_(0.5)
        feat = net(img)
        feat = feat[0].detach().numpy()
        embeddings.append(feat)

    return embeddings


def find_names(image, minConf):
    # Load an image
    image = Image.open(image)  # Replace 'args.image' with your image path
    # Detect faces
    boxes, _ = mtcnn.detect(image)
    # Get the list of cropped face images
    cropped_test_faces = crop_faces(image, boxes)
    test_embeds = inference(args.weight, args.network, cropped_test_faces)
    # Avoid creating a local variable with the same name 'source_embeddings'
    global source_embeddings
    source_embeddings = np.array(source_embeddings)
    source_embeddings = np.squeeze(source_embeddings, axis=1)
    test_embeds= np.array(test_embeds)
    test_embeds=  np.squeeze(test_embeds, axis=1)
    distances = np.zeros((len(source_embeddings), len(test_embeds)))

    for i, s in enumerate(source_embeddings):
        for j, t in enumerate(test_embeds):
            distances[i][j] = findCosineDistance(s, t)

    ids = np.argmin(distances, axis=0)
    roll_nos = []

    for j, i in enumerate(ids):
        if 1 - distances[i][j] > minConf:
            roll_nos.append(source_images[i].split("/")[-1].split(".")[0])
        else:
            roll_nos.append("Unknown")

    return ",".join(roll_nos)


    # print("Roll Numbers:", names)



app = FastAPI()

class FaceRecognitionResponse(BaseModel):
    names: str

@app.post("/recognize")
async def recognize_faces(image: UploadFile, minConf: float = 0.5):
    try:
        # Save the uploaded image to a file
        with open("temp_image.jpg", "wb") as temp_image:
            temp_image.write(image.file.read())

        # Perform face recognition
        names = find_names("temp_image.jpg", minConf)

        if __name__ == "__main__":
            parser = argparse.ArgumentParser(description='PyTorch ArcFace Training')
            parser.add_argument('--network', type=str, default='vit_l_dp005_mask_005', help='backbone network')
            parser.add_argument('--weight', type=str, default='glint360k_model_TransFace_L.pt')
            parser.add_argument('--image', type=str, default='temp_image.jpg')
            parser.add_argument('--minConf', type=float, default=0.3)
            args = parser.parse_args()
            names = find_names(args.image, args.minConf)
            # Return the recognition results
            response = FaceRecognitionResponse(names=names)
            return response
    except Exception as e:
        # Handle and log any errors here
        return JSONResponse(content={"error": str(e)})


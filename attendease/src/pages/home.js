import React from 'react';
import ImageSection from '../components/ImageSection';
import Stats from '../components/Stats';
import Today from '../components/Today';
import '../components/Hero.css'; 

function Home() {
  return (
    <div><div class="hero">
    <div class="box">
    <div class="text"><div class="yo"><h1 class="name">ATTENDEASE</h1> </div>
      <div class="yo"><h1 class="same">Synchronize,Simplify,AttendEase</h1> </div>
    </div>
      
   
      
  
   
      
      </div>
     
      
      

      
  </div>
  <ImageSection/>
    <Stats/>
    <Today/>
  </div>
    
  );
}

export default Home;

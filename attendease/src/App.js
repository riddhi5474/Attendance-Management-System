import logo from './logo.svg';
import { BrowserRouter , Routes, Route,Link }
    from 'react-router-dom';
import './App.css';
import Table1 from './components/Table';
import Stats from './components/Stats';
import Students from './components/Students';
import ImageSection from './components/ImageSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Today from './components/Today';
import Filter from './components/filter';

import Attend from './pages/WorkPage';
import Student from './pages//student';
import Home from './pages//home';

function App() {
  return (
    
    	<>
			
      <Navbar/>
			<Routes>
			<Route path="/" element={<Home />} />
				<Route path="/about" element={<Attend />} />
        <Route path="/student" element={<Student />} />
			</Routes>
    	</>
  	);
  
}

export default App;

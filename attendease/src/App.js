import logo from './logo.svg';
import './App.css';
import Table1 from './components/Table';
import Stats from './components/Stats';
import Students from './components/Students';
import ImageSection from './components/ImageSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Table from './components/Table';


function App() {
  return (
    <div>
     <div><Navbar/></div>
      <div><Hero/></div>
    <div><ImageSection/></div>
    <div><Table/></div>
    <div><Stats/></div>
    <div className='Students'><Students/></div>
    

    </div>
  );
}

export default App;

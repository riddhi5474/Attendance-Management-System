import logo from './logo.svg';
import './App.css';
import Table1 from './components/Table';
import Stats from './components/Stats';
import Students from './components/Students';
import ImageSection from './components/ImageSection';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Table from './components/Table';
import Today from './components/Today';


function App() {
  return (
    <div>
    <div><Navbar/></div>
    <div><Hero/></div>
    <div><ImageSection/></div>
    <div><Stats/></div>
    <div><Today/></div>
    {/* <div><Table/></div>
    <Students/>
     */}

    </div>
  );
}

export default App;

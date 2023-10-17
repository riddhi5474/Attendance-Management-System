import logo from './logo.svg';
import './App.css';
import Table1 from './components/Table';
import Stats from './components/Stats';
import Students from './components/Students';

function App() {
  return (
    <div>

    <div><Stats/></div>
    <div className='Students'><Students/></div>
    </div>
  );
}

export default App;

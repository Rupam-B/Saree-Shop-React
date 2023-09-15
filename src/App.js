import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <div className='arrangement'>
    <Sidebar/>
    <Home/>
    </div>
    </>
  );
}

export default App;

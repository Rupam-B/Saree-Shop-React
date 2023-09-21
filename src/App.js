import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import About from './components/Sidebar/SidebarComponents/About';
import Contact from './components/Sidebar/SidebarComponents/Contact';
import Orders from './components/Sidebar/SidebarComponents/Orders';
import Favourite from './components/NavbarSubComps/Favourites/Favourite';
import Authen from './components/NavbarSubComps/Authentication/Authen';
import Cart from './components/NavbarSubComps/Cart/Cart'


function App() {
  return (
    <>
    <Navbar/>
    <div className='arrangement'>
    <Sidebar/>
    <div className='changingScreen'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/favourites' element={<Favourite/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/authen' element={<Authen/>}/>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;

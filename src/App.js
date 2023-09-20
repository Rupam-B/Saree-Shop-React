import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Routes,Route } from 'react-router-dom'
import About from './components/Sidebar/SidebarComponents/About';
import Contact from './components/Sidebar/SidebarComponents/Contact';
import Orders from './components/Sidebar/SidebarComponents/Orders';
import Favourite from './components/NavbarSubComps/Favourites/Favourite';
import cart from './components/NavbarSubComps/Cart/cart';
import Authen from './components/NavbarSubComps/Authentication/Authen';

function App() {
  return (
    <>
    <Navbar/>
    <div className='arrangement'>
    <Sidebar/>
    <div className='changingScreen'>
    <Routes>
    <Route exact path="/" Component={Home}/>
    <Route path='/about' Component={About}/>
    <Route path='/contact' Component={Contact}/>
    <Route path='/orders' Component={Orders}/>
    <Route path='/favourites' Component={Favourite}/>
    <Route path='/cart' Component={cart}/>
    <Route path='/authen' Component={Authen}/>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;

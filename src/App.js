import './App.css';
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar'
import About from './components/Sidebar/SidebarComponents/About';
import Contact from './components/Sidebar/SidebarComponents/Contact';
import Orders from './components/Sidebar/SidebarComponents/Orders';
import Favourite from './components/NavbarSubComps/Favourites/Favourite';
import Authen from './components/NavbarSubComps/Authentication/Authen';
import CartDetails from './components/NavbarSubComps/Cart/CartDetails';
import ExtendedHomeItems from './components/Home/DisplayExtendedHomeItems/ExtendedHomeItems';
import SubFinalHome from './components/Home/DisplayExtendedHomeItems/SubExtendedDisplay/SubFinalHome';
import OrderExtended from './components/Sidebar/SidebarComponents/OrderExtended';
import Search from './components/NavbarSubComps/Search/Search';


function App() {
  return (
    <>
    <Navbar/>
    <ToastContainer />
    <div className='arrangement'>
    <Sidebar/>
    <div className='changingScreen'>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/ExtendedHomeItems/:id' element={<ExtendedHomeItems/>}/>
    <Route path='/SubFinalHome/:id/:idOne' element={<SubFinalHome/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/orders' element={<Orders/>}/>
    <Route path='/favourites' element={<Favourite/>}/>
    <Route path='/authen' element={<Authen/>}/>
    <Route path='/Cart' element={<CartDetails/>}/>
    <Route path='/OrderExtended' element={<OrderExtended/>} />
    <Route path='/Search' element={<Search/>}/>
    </Routes>
    </div>
    </div>
    </>
  );
}

export default App;


import './App.css';
import Home from './components/page/Home';
import AboutUs from './components/page/AboutUs';
import Contract  from './components/page/Contract';
import Login from './components/page/Login';
import {
  BrowserRouter,Route,Routes
} from "react-router-dom";

import Navbar from './components/Navbar';
import RegisterPage from './components/page/Register';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/about' element= {<AboutUs/> }/>
      <Route path='/Contract' element= {<Contract/>} />
      <Route path='/login' element= {<Login/>}/>
      <Route path='/Register' element= {<RegisterPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

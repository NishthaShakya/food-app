import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './components/pages/Home/Home'
import Cart from './components/pages/Cart/Cart'
import PlaceOrder from './components/pages/PlaceOrder/PlaceOrder'
import Login from './components/Login/Login'
import { useState } from 'react'
import Footer from './components/Footer/Footer'
function App() {
   
  const [showLogin,setShowLogin] = useState(false)
  

  return (
    <>
      {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/cart' element={<Cart/>}/>
        <Route path = '/placeorder' element={<PlaceOrder/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App

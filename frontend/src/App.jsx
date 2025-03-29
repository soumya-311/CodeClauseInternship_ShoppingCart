import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Collection from './pages/Collection';
import login from './pages/login'
import Cart from './pages/Cart'
import orders from './pages/orders'
import contact from './pages/contact'
import Product from './pages/Product'
import placeorder from './pages/placeorder'
import about from './pages/about'
import Navbar from './components/navbar'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer';


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/login' element={<login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/orders' element={<orders/>} />
        <Route path='/contact' element={<contact/>} />
        <Route path='/product/:productID' element={<Product/>} />
        <Route path='/placeorder' element={<placeorder/>} />
        <Route path='/about' element={<about/>} />
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App

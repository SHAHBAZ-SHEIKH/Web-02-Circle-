import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import MaterialUI from "./pages/MaterialUI"


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/Material' element={<MaterialUI/>} />

      </Routes>
    </BrowserRouter>

  )
}

export default App
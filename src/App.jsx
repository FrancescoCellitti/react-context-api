import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import AboutUs from './pages/AboutUs'
import DefaultLayout from './layout/DefaultLayout'
import SingleProduct from './pages/SingleProduct'
import { GlobalProvider } from './Contexts/GlobalContext'



function App() {
  

  return (
    <>

      <GlobalProvider>
        <BrowserRouter>
          <Routes>

            <Route Component={DefaultLayout}>
              <Route index Component={HomePage}></Route>
              <Route path='/Abouth_Us' Component={AboutUs}></Route>
              <Route path='/product/:id' Component={SingleProduct}></Route>
              <Route path='/products' Component={ProductsPage}></Route>

            </Route>





          </Routes>





        </BrowserRouter>

      </GlobalProvider>

    </>
  )
}

export default App

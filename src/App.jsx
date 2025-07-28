import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
    </>
  )
}

export default App

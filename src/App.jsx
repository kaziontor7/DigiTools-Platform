import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import NavBar from './Components/NavBar/NavBar'
import Pricing from './Components/Pricing/Pricing'
import Ready from './Components/Ready/Ready'
import Shop from './Components/Shop/Shop'
import Stats from './Components/Stats/Stats'
import { ToastContainer } from 'react-toastify'

const toolsPromise = fetch('tools.json').then(res=>res.json())

function App() {
  const [cartProduct,setCartProduct]=useState([])
  
  return (
    <>
     <header>
      <NavBar cartProduct={cartProduct}></NavBar>

      <Banner></Banner>
     </header>
     <main>
      <Stats></Stats>
      <Shop toolsPromise={toolsPromise} cartProduct={cartProduct} setCartProduct={setCartProduct}></Shop>
     <GetStarted></GetStarted>
     <Pricing></Pricing>
     <Ready></Ready>
     </main>
     <footer>
      <Footer></Footer>
     </footer>
     <ToastContainer></ToastContainer>
    </>
  )
}

export default App

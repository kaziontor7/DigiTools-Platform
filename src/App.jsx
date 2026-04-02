import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import GetStarted from './Components/GetStarted/GetStarted'
import NavBar from './Components/NavBar/NavBar'
import Pricing from './Components/Pricing/Pricing'
import Ready from './Components/Ready/Ready'
import Shop from './Components/Shop/Shop'
import Stats from './Components/Stats/Stats'

const toolsPromise = fetch('tools.json').then(res=>res.json())

function App() {
  
  return (
    <>
     <header>
      <NavBar></NavBar>

      <Banner></Banner>
     </header>
     <main>
      <Stats></Stats>
      <Shop toolsPromise={toolsPromise}></Shop>
     <GetStarted></GetStarted>
     <Pricing></Pricing>
     <Ready></Ready>
     </main>
     <footer>
      <Footer></Footer>
     </footer>
    </>
  )
}

export default App

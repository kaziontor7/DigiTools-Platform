import './App.css'
import Banner from './Components/Banner/Banner'
import GetStarted from './Components/GetStarted/GetStarted'
import NavBar from './Components/NavBar/NavBar'
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
     </main>
    </>
  )
}

export default App

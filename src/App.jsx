import './App.css'
import Adventure from './Components/Adventure/Adventure'
import Footer from './Components/Footer/Footer'
import HotDeal from './Components/HotDeal/HotDeal'
import SpecialOffer from './Components/SpecialOffer/SpecialOffer'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Adventure></Adventure>
    <HotDeal></HotDeal>
    <SpecialOffer></SpecialOffer>
    <Footer></Footer>
    </>
  )
}

export default App

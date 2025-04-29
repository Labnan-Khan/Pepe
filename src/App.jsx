import About from "./component/about/About"
import Footer from "./component/fotter/Footer"
import Home from "./component/home/Home"
import HowTobuy from "./component/howtobuy/HowTobuy"
import Navbar from "./component/navbar/Navbar"
import Roadmap from "./component/roadmap/Roadmap"
import Tokenomic from "./component/tokenomic/Tokenomic"

 
function App() {
  
   return (
    <div >
      <Navbar />
      <Home />
      <About />
      <HowTobuy />
      <Tokenomic />
      <Roadmap />
      <Footer />
    </div>
   )
 }
 
 export default App
 
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Home/Footer"



function App() {
 

  return (
    <div >
    <Navbar></Navbar>
  
    <Outlet></Outlet>
    <Footer></Footer>
    </div>
  )
}

export default App

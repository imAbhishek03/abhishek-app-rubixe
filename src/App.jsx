import AboutUs from "./Components/AboutUs"
import Menu from "./Components/Menu"
import Navbar from "./Components/Navbar"
import Register from "./Components/Register"

const App = () =>{
    return(
        <div>
            <Navbar/>
            <AboutUs/>
            <Menu/><br /><br />
            <Register/><br /><br />
        </div>
    )
}
export default App
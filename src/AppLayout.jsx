import About from "./ui/About"
import Entrance from "./ui/Entrance"
import Experience from "./ui/Experience"
import Navbar from "./ui/Navbar"
import Projects from "./ui/Projects"

function AppLayout() {
  return (
    <div>
        <Navbar/>
        <div>
            <Entrance/>
            <div>
                <About/>
            </div>
            <div>
                <Experience/>
            </div>
            <div>
                <Projects/>
            </div>
        </div>
    </div>
  )
}

export default AppLayout
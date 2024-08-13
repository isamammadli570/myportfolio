import About from "./ui/About";
import Contact from "./ui/Contact";
import Entrance from "./ui/Entrance";
import Experience from "./ui/Experience";
import Navbar from "./ui/Navbar";
import Projects from "./ui/Projects";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Entrance />
      <About />
      <Experience />
      <Projects />
      <Contact/>
    </div>
  );
}

export default AppLayout;

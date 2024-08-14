import { useEffect, useState } from "react";
import About from "./ui/About";
import Contact from "./ui/Contact";
import Entrance from "./ui/Entrance";
import Experience from "./ui/Experience";
import Navbar from "./ui/Navbar";
import Projects from "./ui/Projects";
import ResponsiveNav from "./ui/ResponsiveNav";

//aos import
import AOS from "aos";
import "aos/dist/aos.css";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <section className=" h-full">
      <div>
        <div
          className={`absolute h-full transform border-x z-[1000] bg-stone-100 ${
            !isOpen ? "hidden -translate-x-full opacity-0" : "translate-x-0"
          } h-screen w-72 transition-transform duration-700`}
        >
          {isOpen && <ResponsiveNav setIsOpen={setIsOpen} />}
        </div>
        <div>
          <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
          <Entrance />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </div>
    </section>
  );
}

export default AppLayout;

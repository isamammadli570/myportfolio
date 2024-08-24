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
    <section
      className="bg-stone-100 dark:bg-neutral-800 dark:text-stone-100
    scroll-smooth h-full"
    >
      <div>
        <div
          className={
            isOpen
              ? "fixed top-0 left-0 w-[300px] h-screen bg-stone-100 dark:bg-neutral-800 z-10 duration-300"
              : "fixed top-0 left-[-100%] w-[300px] h-screen bg-stone-100 dark:bg-neutral-800 z-10 duration-300"
          }
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

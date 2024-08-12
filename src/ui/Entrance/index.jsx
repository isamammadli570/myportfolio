/* eslint-disable react/no-unescaped-entities */
import FlexUi from "../../reusable/FlexUi";
import img from "../../assets/aristotle.jpg";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function Entrance() {
  return (
    <FlexUi type="center">
      <section className="flex justify-center items-center gap-12 p-56">
        <div>
          <img className="w-96 rounded-full" src={img} alt="" />
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-700 p-2">Hello, I'm</p>
          <h1 className="text-5xl font-semibold p-1">Isa Mammadli</h1>
          <p className="text-2xl text-gray-500 p-2">Front-End Developer</p>
          <div className="flex justify-center gap-2 p-2">
            <button
              className="border-2 rounded-3xl p-3 
             border-stone-600 transition-all  duration-300 hover:text-stone-100 hover:-translate-y-1 
             active:translate-y-2 hover:bg-stone-800 uppercase font-semibold cursor-pointer 
             text-sm animate-moveInTop"
            >
              Download CV
            </button>
            <button
              className="border-2 rounded-3xl p-3 0
             border-stone-600 transition-all bg-stone-800 duration-300 text-stone-100 
             hover:-translate-y-1 active:translate-y-2 uppercase font-semibold cursor-pointer
              text-sm animate-moveInBottom"
            >
              Contact Info
            </button>
          </div>
          <div className="flex justify-center gap-3">
            <img
              className="w-8"
              src={linkedin}
              alt="My LinkedIn profile"
              /* onclick="location.href='https://linkedin.com/'" */
            />
            <img
              className="w-8"
              src={github}
              alt="My Github profile"
              /* onclick="location.href='https://github.com/'" */
            />
          </div>

          <div></div>
        </div>
      </section>
    </FlexUi>
  );
}

export default Entrance;

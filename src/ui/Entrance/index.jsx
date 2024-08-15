import FlexUi from "../../reusable/FlexUi";
import Typography from "../../reusable/Typography";
import ImgUi from "../../reusable/ImgUi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/aristotle.jpg";
import resume from "../../assets/IsaMammadliResume.pdf";
import DarkMode from "../DarkMode";

function Entrance() {
  return (
    <FlexUi
      type="center"
      style=" mx-20 h-[50rem] md:flex-row flex-col min-h-fit text-center gap-12	"
    >
      <ImgUi type="primary" src={img} />
      <FlexUi type="center" style="flex-col gap-2 relative ">
        <Typography
          style="dark:text-zinc-400"
          type="text_secondary_sm"
          content="Hello,I`m"
        />
        <Typography
          style="dark:text-stone-100"
          type="text_primary_lg"
          content="Isa Mammadli"
        />
        <Typography
          style="dark:text-zinc-400"
          type="text_secondary_md"
          content="FrontEnd Developer"
        />
        <FlexUi type="center" style="mt-5 gap-2">
          <button
            className="border-2 rounded-3xl p-3 border-stone-600 dark:border-stone-400 
            transition-all  duration-300 hover:text-stone-100 hover:-translate-y-1 active:translate-y-2 hover:bg-stone-800 
            uppercase font-semibold cursor-pointer text-sm"
          >
            <a
              className="dark:text-stone-100"
              href={resume}
              download="myResume"
            >
              Download Cv
            </a>
          </button>
          <button
            className="border-2 rounded-3xl p-3 border-stone-600 dark:border-stone-400 
            transition-all bg-stone-800 dark:bg-stone-300 duration-300 text-stone-100 dark:text-black hover:-translate-y-1 
            active:translate-y-2 uppercase font-semibold cursor-pointer text-sm"
          >
            <a href="/#contact">Contact Info</a>
          </button>
        </FlexUi>
        <FlexUi type="center" style="mt-5 gap-2 text-stone-800 text-3xl">
          <a href="https://www.linkedin.com/in/isa-məmmədli-4411aa285">
            <FaLinkedin className="cursor-pointer dark:text-stone-200 " />
          </a>
          <a href="https://github.com/isamammadli570">
            <FaGithub className="cursor-pointer dark:text-stone-200 " />
          </a>
        </FlexUi>
        <div className="absolute right-0 top-0 ">
          <DarkMode />
        </div>
      </FlexUi>
    </FlexUi>
  );
}

export default Entrance;

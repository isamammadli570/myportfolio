/* eslint-disable react/no-unescaped-entities */
import FlexUi from "../../reusable/FlexUi";
import Typography from "../../reusable/Typography";
import ImgUi from "../../reusable/ImgUi";
import ButtonUi from "../../reusable/ButtonUi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../../assets/aristotle.jpg";

function Entrance() {
  return (
    <FlexUi
      type="center"
      style="mx-20 h-[50rem] md:flex-row flex-col min-h-fit text-center gap-12	"
    >
      <ImgUi type="primary" src={img} style="animate-moveInLeft" />
      <FlexUi type="center" style="flex-col gap-2 ">
        <Typography
          type="text_secondary_sm"
          content="Hello,I`m"
          style="animate-moveInRight"
        />
        <Typography
          type="text_primary_lg"
          content="Isa Mammadli"
          style="animate-moveInLeft"
        />
        <Typography
          type="text_secondary_md"
          content="FrontEnd Developer"
          style="animate-moveInRight"
        />
        <FlexUi type="center" style="mt-5 gap-2">
          <ButtonUi
            type="primary_md"
            content="Download Cv"
            style="animate-moveInTop"
          />
          <ButtonUi
            type="secondary_md"
            content="Contact Info"
            style="animate-moveInBottom"
          />
        </FlexUi>
        <FlexUi type="center" style="mt-5 gap-2 text-stone-800 text-3xl">
          <a href="https://github.com/isamammadli570">
            <FaGithub className=" cursor-pointer " />
          </a>
          <a href="https://www.linkedin.com/in/isa-məmmədli-4411aa285">
            <FaLinkedin className=" cursor-pointer " />
          </a>
        </FlexUi>
      </FlexUi>
    </FlexUi>
  );
}

export default Entrance;

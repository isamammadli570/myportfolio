/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedin } from "react-icons/fa";

import FlexUi from "../../reusable/FlexUi";
import { AiOutlineClose } from "react-icons/ai";

const Menu = [
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Experience",
    link: "/#experience",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

function ResponsiveNav({ setIsOpen }) {
  const toggleNavbar = () => {
    setIsOpen((open) => !open);
  };
  return (
    <div data-aos="slide-right" data-aos-duration="200">
      <div className="flex  gap-20 justify-center pt-10">
        <AiOutlineClose
          className="text-3xl cursor-pointer mt-6 font-semibold "
          onClick={() => setIsOpen((open) => !open)}
        />
      </div>
      <FlexUi type="none" style="flex-col mt-32 gap-10 items-center ">
        <ul>
          {Menu?.map((menu) => (
            <li className="p-6" key={menu.name}>
              <a className="text-xl" onClick={toggleNavbar} href={menu.link}>
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </FlexUi>
      <FlexUi type="center" style="mt-40 gap-2 text-stone-800 text-3xl">
        <a href="https://github.com/isamammadli570">
          <FaLinkedin className="cursor-pointer dark:text-stone-100" />
        </a>
        <a href="https://www.linkedin.com/in/isa-məmmədli-4411aa285">
          <FaGithub className="cursor-pointer dark:text-stone-100 " />
        </a>
      </FlexUi>
    </div>
  );
}

export default ResponsiveNav;

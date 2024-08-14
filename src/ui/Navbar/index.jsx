/* eslint-disable react/prop-types */
import FlexUi from "../../reusable/FlexUi";
import Typography from "../../reusable/Typography";
import { CgDetailsMore } from "react-icons/cg";

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

function Navbar({ isOpen, setIsOpen }) {
  return (
    <FlexUi type="around" style="pt-10 bg-white">
      <FlexUi type="none" style="hidden md:flex">
        <ul className="flex text-2xl">
          {Menu?.map((menu) => (
            <li className="p-6" key={menu.name}>
              <a className="hover:text-gray-500 hover:border-b-2 duration-200 " href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </FlexUi>
      <div >
        {!isOpen && (
          <CgDetailsMore
            onClick={() => setIsOpen((open) => !open)}
            className={` md:hidden text-2xl cursor-pointer`}
          />
        )}
      </div>
      <FlexUi type="none" style="items-center">
        <Typography
          type="header_primary_md"
          style="hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
          content="Isa Mammadli"
        />
      </FlexUi>
    </FlexUi>
  );
}

export default Navbar;

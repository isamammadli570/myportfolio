import FlexUi from "../../reusable/FlexUi";
import Typography from "../../reusable/Typography";

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

function Navbar() {
  return (
    <FlexUi type="around" style="pt-10">
      <FlexUi type="none" style="items-center">
        <Typography
          type="header_primary_md"
          style="hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
          content="Isa Mammadli"
        />
      </FlexUi>
      <FlexUi type="none">
        <ul className="flex text-2xl">
          {Menu?.map((menu) => (
            <li className="p-6" key={menu.name}>
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </FlexUi>
    </FlexUi>
  );
}

export default Navbar;

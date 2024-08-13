import { BiLogoGmail } from "react-icons/bi";
import FlexUi from "../../reusable/FlexUi";
import Typography from "../../reusable/Typography";
import { FaLinkedin } from "react-icons/fa";

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

function Contact() {
  return (
    <div id="contact">
      <FlexUi type="none" style="flex-col md:h-[70vh] mt-[10vh] min-h-fit ">
        <Typography
          type="text_secondary_sm"
          content="Get in Touch"
          style="text-center mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="Contact Me"
          style="text-center mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <FlexUi type="center" style="text-2xl">
          <div className="border-2 border-stone-950 rounded-2xl flex gap-10 p-7 ">
            <div className="flex items-center gap-2">
              <BiLogoGmail />
              <a
                href="https://mail.google.com"
                className="hover:text-gray-500 hover:border-b-2 duration-200"
              >
                Example@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com"
                className="hover:text-gray-500 hover:border-b-2 duration-200"
              >
                Linkedln
              </a>
            </div>
          </div>
        </FlexUi>
        <FlexUi type="center" style="mt-60">
          <ul className="flex text-2xl">
            {Menu?.map((menu) => (
              <li className="p-6" key={menu.name}>
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </FlexUi>
        <FlexUi type="center" style="mt-6">
          <Typography
            type="text_secondary_sm"
            content="Copyright © 2024 Isa Mammadli. All Rights Reserved."
          />
        </FlexUi>
      </FlexUi>
    </div>
  );
}

export default Contact;

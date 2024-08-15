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
    <div id="contact" className="mt-40">
      <FlexUi type="none" style="flex-col">
        <Typography
          type="text_secondary_sm"
          content="Get in Touch"
          style="text-center dark:text-zinc-400 mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="Contact Me"
          style="text-center dark:text-stone-100 mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <FlexUi type="center" style="md:text-2xl">
          <div className="border-2 border-stone-950 dark:border-stone-300 rounded-2xl flex gap-10 md:p-7 p-4 ">
            <div className="flex items-center gap-2">
              <BiLogoGmail className="dark:text-stone-100" />
              <a
                href="https://mail.google.com/mail/u/0/#sent?compose=DmwnWtVdLxnRthxpxMgffbqwvzVRWhSJHDVZgtStcWbjWfwqTQgmxvhDFsZrLRCTBqxbfNVDfJsV"
                className="hover:text-gray-500 dark:hover:text-gray-700
                 dark:text-stone-100 hover:border-b-2 duration-200"
              >
                isamammadlee@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaLinkedin className="dark:text-stone-100" />
              <a
                href="https://www.linkedin.com/in/isa-məmmədli-4411aa285"
                className="hover:text-gray-500 dark:hover:text-gray-700
                 dark:text-stone-100 hover:border-b-2 duration-200"
              >
                Linkedln
              </a>
            </div>
          </div>
        </FlexUi>
        <FlexUi type="center" style="mt-60">
          <ul className="flex md:text-2xl">
            {Menu?.map((menu) => (
              <li className="p-6" key={menu.name}>
                <a
                  className="hover:text-gray-500 dark:hover:text-gray-700 
                  hover:border-b-2 dark:text-stone-100 duration-200"
                  href={menu.link}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </FlexUi>
        <FlexUi type="center" style="mt-6">
          <Typography
            type="text_secondary_sm"
            style="text-xs dark:text-stone-400"
            content="Copyright © 2024 Isa Mammadli. All Rights Reserved."
          />
        </FlexUi>
      </FlexUi>
    </div>
  );
}

export default Contact;

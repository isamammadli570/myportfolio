/* eslint-disable react/no-unescaped-entities */
import FlexUi from "../../reusable/FlexUi";
import ImgUi from "../../reusable/ImgUi";
import img from "../../assets/aristotle.jpg";
import Typography from "../../reusable/Typography";
import { IoMdMedal } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";

function About() {
  return (
    <div id="about">
      <FlexUi type="none" style="flex-col text-center ">
        <Typography
          type="text_secondary_sm"
          content="Get To Know More"
          style="text-center mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="About Me"
          style="text-center mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />

        <FlexUi
          type="center"
          style="my-0 flex-col md:flex-col lg:flex-row mx-10 gap-20"
        >
          <ImgUi type="triatry" src={img} />

          <FlexUi type="none" style="flex-col text-center">
            <FlexUi type="center" style="flex-col md:flex-row gap-5">
              <div className="border-[1px] border-stone-700  md:w-[350px] lg:w-[450px] py-10 rounded-3xl">
                <FlexUi
                  type="none"
                  style="flex-col items-center justify-center gap-1"
                >
                  <IoMdMedal className="text-2xl" />
                  <Typography type="header_primary_md" content="Experience" />
                  <Typography type="text_secondary_sm" content="1+ years" />
                  <Typography
                    type="text_secondary_sm"
                    content="FrontEnd Development"
                  />
                </FlexUi>
              </div>

              <div className="border-[1px] border-stone-700 w-[350px] md:w-[450px] py-10 rounded-3xl">
                <FlexUi
                  type="none"
                  style="flex-col items-center justify-center gap-1"
                >
                  <PiStudentBold className="text-2xl" />
                  <Typography type="header_primary_md" content="Education" />
                  <Typography
                    type="text_secondary_sm"
                    content="Azerbaijan University of Economy"
                  />
                  <Typography
                    type="text_secondary_sm"
                    content="Bachelors Degree"
                  />
                </FlexUi>
              </div>
            </FlexUi>
            <p className="md:w-[50rem] mt-5">
              I've been working with React.js for a year, focusing on building
              dynamic and responsive user interfaces. My experience includes
              using tools like React Query for efficient data fetching and state
              management, as well as leveraging the Context API for handling
              global state across the application. I strive to create clean,
              maintainable code and continually enhance my skills to deliver
              high-quality, user-friendly web applications.
            </p>
    
          </FlexUi>
        </FlexUi>
      </FlexUi>
    </div>
  );
}

export default About;

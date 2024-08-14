/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import FlexUi from "../FlexUi";
import ImageUi from "../ImgUi";
import ButtonUi from "../ButtonUi";
import Typography from "../Typography";
import { HiCheckBadge, HiLanguage } from "react-icons/hi2";
import { RiTeamFill } from "react-icons/ri";

function ListElement({ type, skill, project }) {
  if (type === "hardskills") {
    const { name, status } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <HiCheckBadge className="text-3xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
          <Typography type="text_secondary_md" content={status} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "softskills") {
    const { name } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <RiTeamFill className="text-2xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "languageskills") {
    const { name, status } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <HiLanguage className="text-2xl" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography type="header_primary_md" content={name} />
          <Typography type="text_secondary_md" content={status} />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "projects") {
    const { name, description, tech, image, github, demo } = project;
    return (
      <FlexUi type="none" style="border-2 border-stone-500 p-12 rounded-xl">
        <FlexUi type="none" style="flex-col">
          <div className="border-2 border-stone-500 rounded-2xl">
            <ImageUi type="triatry" src={image} />
          </div>
          <FlexUi type="none" style="md:w-[400px] mt-5 gap-2 flex-wrap">
            {tech?.map((tech) => {
              return (
                <div key={tech}>
                  <Typography
                    type="header_primary_xs"
                    content={tech}
                    style="border-2 border-stone-500 rounded-lg p-1"
                  />
                </div>
              );
            })}
          </FlexUi>
          <FlexUi type="around" style="mt-6 items-center">
            <FlexUi type="none">
              <Typography type="header_primary_md" content={name} />
            </FlexUi>
            <FlexUi type="none" style="gap-2">
              <ButtonUi type="primary_sm" content="GitHub" />
              <ButtonUi type="primary_sm" content="Live Demo" />
            </FlexUi>
          </FlexUi>
        </FlexUi>
      </FlexUi>
    );
  }
}

export default ListElement;

/* eslint-disable no-unused-vars */
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
        <HiCheckBadge className="md:text-3xl text-xl dark:text-stone-200" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography
            style="dark:text-zinc-400"
            type="header_primary_md"
            content={name}
          />
          <Typography
            style="dark:text-stone-500"
            type="text_secondary_md"
            content={status}
          />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "softskills") {
    const { name } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center ">
        <RiTeamFill className="md:text-3xl text-xl dark:text-stone-200" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography
            style="dark:text-zinc-400"
            type="header_primary_md"
            content={name}
          />
        </FlexUi>
      </FlexUi>
    );
  }
  if (type === "languageskills") {
    const { name, status } = skill;
    return (
      <FlexUi type="none" style="gap-3 items-center">
        <HiLanguage className="text-2xl dark:text-stone-200" />
        <FlexUi type="none" style="flex-col gap-2">
          <Typography
            style="dark:text-zinc-400"
            type="header_primary_md"
            content={name}
          />
          <Typography
            style="dark:text-stone-500"
            type="text_secondary_md"
            content={status}
          />
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
            <ImageUi type="triatry" style="w-full" src={image} />
          </div>
          <FlexUi type="none" style="md:w-[400px] mt-5 gap-2 flex-wrap">
            {tech?.map((tech) => {
              return (
                <div key={tech}>
                  <Typography
                    type="header_primary_xs"
                    content={tech}
                    style="border-2 border-stone-500 dark:text-zinc-400 rounded-lg p-1"
                  />
                </div>
              );
            })}
          </FlexUi>
          <FlexUi type="around" style="mt-6 items-center">
            <FlexUi type="none">
              <Typography style="dark:text-stone-100" type="header_primary_md" content={name} />
            </FlexUi>
            <FlexUi type="none" style="gap-2">
              <ButtonUi style="dark:text-stone-100 dark:border-stone-400" type="primary_sm" content="GitHub" link={github} />
              <ButtonUi style="dark:text-black dark:bg-stone-300 dark:border-stone-400" type="secondary_sm" content="Live Demo" link={demo} />
            </FlexUi>
          </FlexUi>
        </FlexUi>
      </FlexUi>
    );
  }
}

export default ListElement;

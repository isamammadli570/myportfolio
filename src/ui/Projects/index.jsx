import FlexUi from "../../reusable/FlexUi";
import List from "../../reusable/List";
import Typography from "../../reusable/Typography";

function Projects() {
  return (
    <div id="projects" className="mt-60">
      <FlexUi type="none" style="flex-col md:h-[85vh] mt-[15vh] min-h-fit">
        <Typography
          type="text_secondary_sm"
          content="Browse my Recent"
          style="text-center dark:text-zinc-400 mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="Projects"
          style="text-center dark:text-stone-100 mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />

        <List type="projects" />
      </FlexUi>
    </div>
  );
}

export default Projects;

import FlexUi from "../../reusable/FlexUi";
import List from "../../reusable/List";
import Typography from "../../reusable/Typography";

function Projects() {
  return (
    <div id="projects" className="mt-72">
      <FlexUi type="none" style="flex-col md:h-[85vh] mt-[15vh] min-h-fit">
        <Typography
          type="text_secondary_sm"
          content="Browse my Recent"
          style="text-center mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="Projects"
          style="text-center mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />

        <List type="projects" />
      </FlexUi>
    </div>
  );
}

export default Projects;

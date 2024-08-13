import FlexUi from "../../reusable/FlexUi";
import List from "../../reusable/List";
import Typography from "../../reusable/Typography";

function Experience() {
  return (
    <div id="experience" className="mt-72">
      <FlexUi type="none" style="flex-col text-center">
        <Typography
          type="text_secondary_sm"
          content="Explore My"
          style="text-center mb-1 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <Typography
          type="header_primary_lg"
          content="Experience"
          style="text-center mb-20 hover:skew-x-3 hover:skew-y-2 hover:scale-[1.3]"
        />
        <div>
          <FlexUi type="around" style="flex-col gap-10 md:flex-row">
            <FlexUi
              type="none"
              style="flex-col  md:w-auto  w-screen  border-2 border-stone-400 rounded-3xl p-10"
            >
              <Typography
                type="text_secondary_lg"
                content="Frontend Development"
                style="text-center mb-1"
              />
              <List type="hardskills" />
            </FlexUi>
            <FlexUi type="none" style="flex-col gap-10">
              <FlexUi
                type="none"
                style="flex-col  md:w-auto  w-screen  border-2 border-stone-400 rounded-3xl p-10"
              >
                <Typography
                  type="text_secondary_lg"
                  content="Soft Skills"
                  style="text-center mb-1"
                />
                <List type="softskills" />
              </FlexUi>

              <FlexUi
                type="none"
                style="flex-col md:w-auto  w-screen  border-2 border-stone-400 rounded-3xl p-10"
              >
                <Typography
                  type="text_secondary_lg"
                  content="Language"
                  style="text-center mb-1"
                />
                <List type="languageskills" />
              </FlexUi>
            </FlexUi>
          </FlexUi>
        </div>
      </FlexUi>
    </div>
  );
}

export default Experience;

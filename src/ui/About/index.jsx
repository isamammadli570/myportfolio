import FlexUi from "../../reusable/FlexUi";
import ImgUi from "../../reusable/ImgUi";
import img from "../../assets/aristotle.jpg";
import Typography from "../../reusable/Typography";

function About() {
  return (
    <FlexUi type="none" style="flex-col">
      <Typography/>
      <FlexUi type="center">
        <ImgUi type="triatry" src={img} style="animate-moveInLeft"></ImgUi>
      </FlexUi>
    </FlexUi>
  );
}

export default About;

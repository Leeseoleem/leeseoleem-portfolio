import myIcon from "../assets/image/myIcon.png";
// icon
import CakeIcon from "@mui/icons-material/Cake";
import PersonIcon from "@mui/icons-material/Person";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";

import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { RiNotionFill } from "react-icons/ri";

// ui Component
import IconButton from "../components/ui/IconButton";
import AboutInfo from "../components/ui/AboutInfo";

const AboutSection = () => {
  const handleGit = () => {
    window.location.href = "https://github.com/Leeseoleem";
  };

  const handleVelog = () => {
    window.location.href = "https://velog.io/@leeseoleem1014";
  };

  const handleNotion = () => {
    window.location.href =
      "https://impossible-forest-7b0.notion.site/Hi-I-m-SeoLeem-65d86df62c714dbdab7f995c8567560f?pvs=4";
  };

  return (
    <section
      id="about"
      className="px-4 py-16 md:py-24 space-y-12 bg-gray-10 text-gray-font font-pretendard"
    >
      <div className="container px-4">
        <h1 className="text-6xl font-bold">About Me</h1>
        <div className="flex flex-col lg:flex-row w-full mx-auto m-12 gap-x-16 rounded-xl bg-gray-white">
          <div className="flex flex-col items-center p-12 space-y-6 ">
            <img
              src={myIcon}
              alt="myIcon"
              className="rounded-full w-[300px] y-[300px]"
            ></img>
            <div className="flex flex-col w-full gap-y-4">
              <IconButton icon={FaGithub} onClick={handleGit}>
                Github
              </IconButton>
              <IconButton icon={SiVelog} onClick={handleVelog}>
                Velog
              </IconButton>
              <IconButton icon={RiNotionFill} onClick={handleNotion}>
                Notion
              </IconButton>
            </div>
          </div>
          <div className="flex flex-col x-full justify-between py-16 px-12 lg:mx-auto gap-y-4">
            <AboutInfo title="이름" icon={PersonIcon}>
              이서림
            </AboutInfo>
            <AboutInfo title="생년월일" icon={CakeIcon}>
              2000.10.14
            </AboutInfo>
            <AboutInfo title="위치" icon={FmdGoodIcon}>
              경기도 의정부시
            </AboutInfo>
            <AboutInfo title="학력" icon={SchoolIcon}>
              신한대학교 (컴퓨터공학과)
            </AboutInfo>
            <AboutInfo title="이메일" icon={EmailIcon}>
              leeseorim0029@gamil.com
            </AboutInfo>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;

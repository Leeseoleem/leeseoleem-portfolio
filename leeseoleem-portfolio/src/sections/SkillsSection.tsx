import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import TechnologyBadge from "../components/ui/TechnologyBadge";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { SiAxios } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { RiJavaLine } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { FiFigma } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiNotion } from "react-icons/si";

const SkillsSection = () => {
  return (
    <section id="skills">
      <div className="flex flex-col w-full justify-center px-4 py-16 md:py-24 bg-gray-10 font-pretendard text-gray-font">
        <div className="container">
          <h1 className="text-6xl font-bold mb-12">Skills</h1>
          <TabGroup>
            <TabList className="flex w-full gap-x-4">
              <Tab
                className="text-[20px] text-gray-30 focus:outline-none
            px-8 data-[selected]:py-4 data-[selected]:rounded-t-xl data-[selected]:bg-gray-white data-[selected]:font-semibold data-[selected]:text-gray-font"
              >
                Main Skills
              </Tab>
              <Tab
                className="text-[20px] text-gray-30 focus:outline-none
          px-8 data-[selected]:py-4 data-[selected]:rounded-t-xl data-[selected]:bg-gray-white data-[selected]:font-semibold data-[selected]:text-gray-font"
              >
                Sub Skill
              </Tab>
              <Tab
                className="text-[20px] text-gray-30 focus:outline-none
            px-8 data-[selected]:py-4 data-[selected]:rounded-t-xl data-[selected]:bg-gray-white data-[selected]:font-semibold data-[selected]:text-gray-font"
              >
                ETC
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <div className="flex flex-col w-full rounded-xl rounded-tl-none bg-white">
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Languages
                    </p>
                    <div className="flex flex-col space-y-4 xl:flex-row xl:space-y-0 xl:space-x-4">
                      <TechnologyBadge
                        Icon={SiJavascript}
                        label="JavaScript"
                        bgColor="bg-[#FADB14]"
                      />
                      <TechnologyBadge
                        Icon={SiTypescript}
                        label="TypeScript"
                        bgColor="bg-[#3178C6]"
                      />
                      <TechnologyBadge
                        Icon={FaHtml5}
                        label="HTML5"
                        bgColor="bg-[#E34F26]"
                      />
                      <TechnologyBadge
                        Icon={RiTailwindCssFill}
                        label="tailwind"
                        bgColor="bg-[#06B6D4]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Framework
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <TechnologyBadge
                        Icon={FaReact}
                        label="React"
                        bgColor="bg-[#0078D4]"
                      />
                      <TechnologyBadge
                        Icon={TbBrandReactNative}
                        label="React native"
                        bgColor="bg-[#20232A]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Server
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <TechnologyBadge
                        Icon={SiAxios}
                        label="Axios"
                        bgColor="bg-[#5A29E4]"
                      />
                      <TechnologyBadge
                        Icon={SiReactquery}
                        label="React Query"
                        bgColor="bg-[#E34F26]"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col w-full rounded-xl rounded-tl-none bg-white">
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Languages
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <TechnologyBadge
                        Icon={FaPython}
                        label="Python"
                        bgColor="bg-[#3776AB]"
                      />
                      <TechnologyBadge
                        Icon={RiJavaLine}
                        label="JAVA"
                        bgColor="bg-[#007396]"
                      />
                    </div>
                  </div>
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Framework
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <TechnologyBadge
                        Icon={RiNextjsFill}
                        label="Next.js"
                        bgColor="bg-[#1E1E1E]"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="flex flex-col w-full rounded-xl rounded-tl-none bg-white">
                  <div className="flex items-center m-10 space-x-12">
                    <p className="text-[24px] font-semibold w-[120px]">
                      Collaboration
                    </p>
                    <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                      <TechnologyBadge
                        Icon={FiFigma}
                        label="Figma"
                        bgColor="bg-[#F24E1E]"
                      />
                      <TechnologyBadge
                        Icon={FaGithub}
                        label="GitHub"
                        bgColor="bg-[#181717]"
                      />
                      <TechnologyBadge
                        Icon={SiNotion}
                        label="Notion"
                        bgColor="bg-[#181717]"
                      />
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

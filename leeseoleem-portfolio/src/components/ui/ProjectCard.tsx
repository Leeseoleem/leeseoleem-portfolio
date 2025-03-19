import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

import ProjectModal from "./modal/ProjectModal";

type Card = {
  title: string;
  subTitle: string;
  contents: string[];
  description: string;
  period: string;
  n: number;
  position: string[];
  pages: string[];
  details: string[];
  technologies: string[]; // ✅ 사용 기술 추가
  issueResolution?: React.ReactNode; // ✅ 이슈 해결 방법 추가
  externalSite: React.ReactNode;
  imageUrls?: string[];
};

const ProjectCard = ({
  title,
  subTitle,
  contents,
  description,
  period,
  n,
  position,
  pages,
  details,
  technologies,
  issueResolution,
  externalSite,
  imageUrls,
}: Card) => {
  return (
    <div className="w-full px-4 text-gray-font ">
      <div className="flex flex-col border-gray-20 shadow-md border-2 rounded-xl p-8 gap-y-8">
        <div>
          <h3 className="text-[32px] font-semibold">{title}</h3>
          <h5 className="text-[20px] text-gray-50 mb-3">{subTitle}</h5>

          <ul className="list-none text-[18px] text-gray-60">
            {contents.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <div className="flex items-center gap-x-3">
            <CalendarTodayIcon />
            <div>
              <p className="text-gray-50">기간</p>
              <p className="text-[18px]">{period}</p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <PeopleAltOutlinedIcon />
            <div>
              <p className="text-gray-50">인원 수</p>
              <p>{n}명</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-3">
          <div>
            <h5 className="text-[20px] font-semibold mb-3">Tech Stack</h5>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-full bg-gray-10 font-semibold"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-[20px] font-semibold mb-3">My Role</h5>
          <ul className="list-disc ml-5">
            {position.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>
        <div>
          <ProjectModal
            title={title}
            subTitle={subTitle}
            contents={contents}
            description={description}
            period={period}
            n={n}
            technologies={technologies}
            position={position}
            pages={pages}
            details={details}
            issueResolution={issueResolution}
            externalSite={externalSite}
            imageUrls={imageUrls}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

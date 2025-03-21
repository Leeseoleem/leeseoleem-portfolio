import React, { useState } from "react";
import Modal from "./Modal";
import ImageCarousel from "../ImageSwiper";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

interface ModalTriggerProps {
  title: string;
  subTitle: string;
  contents: string[];
  description: string;
  period: string;
  n: number;
  technologies: string[];
  position: string[];
  pages: string[];
  details: string[];
  issueResolution?: React.ReactNode;
  externalSite: React.ReactNode;
  imageUrls?: string[];
}

const ProjectModal: React.FC<ModalTriggerProps> = ({
  title,
  subTitle,
  contents,
  description,
  period,
  n,
  technologies,
  position,
  pages,
  details,
  issueResolution,
  externalSite,
  imageUrls,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <div>
      {/* 모달을 여는 버튼 */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-primary rounded text-white text-[20px] font-semibold"
      >
        프로젝트 상세
      </button>

      {/* Modal 컴포넌트 */}
      <Modal isOpen={isOpen} onClose={handleClose} title={title}>
        <div className="flex flex-col gap-y-16 text-gray-font">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-60">
              {subTitle}
            </h3>
            <ul className="list-disc ml-5 text-[16px] md:text-[20px] text-gray-60">
              {contents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <div className="flex w-full">
              {(imageUrls?.length ?? 0) > 0 && (
                <ImageCarousel images={imageUrls ?? []} />
              )}
            </div>
            <hr />
            <p className="whitespace-pre-line text-[16px] md:text-[20px]">
              {description}
            </p>
          </div>

          <div className="flex lg:flex-row flex-col gap-y-3 ">
            <div className="flex items-center gap-x-6">
              <CalendarTodayIcon fontSize="large" />
              <div>
                <p className="text-gray-50 text-[12px] md:text-[18px]">기간</p>
                <p className="text-[16px] md:text-[20px]">{period}</p>
              </div>
            </div>
            <div className="flex items-center gap-x-6 lg:mx-auto">
              {/* 가운데 정렬 */}
              <PeopleAltOutlinedIcon fontSize="large" />
              <div>
                <p className="text-gray-50 text-[12px] md:text-[18px]">
                  인원 수
                </p>
                <p className="text-[16px] md:text-[20px]">{n}명</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-[24px] md:text-[28px] font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-x-2 gap-y-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-full bg-gray-10 font-semibold text-[14px] md:text-[20px]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-[24px] md:text-[28px] font-bold">My Role</h3>
            <div>
              <h3 className="text-[18px] md:text-[22px] font-semibold mb-2">
                🧑‍💻 역할 및 포지션
              </h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {position.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[22px] font-semibold mb-2">
                📄 담당 페이지
              </h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {pages.map((page, index) => (
                  <li key={index}>{page}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[18px] md:text-[22px] font-semibold mb-2">
                ⚙️ 세부 기능
              </h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
          {issueResolution && (
            <div className="flex flex-col gap-y-3">
              <h3 className="text-[24px] md:text-[28px] font-bold">ETC.</h3>
              <div className="text-[20px]">{issueResolution}</div>
            </div>
          )}
          <div className="flex flex-col w-full gap-y-3">
            <h3 className="text-[24px] md:text-[28px] font-bold">Link</h3>
            <div className="flex w-full text-[20px]">{externalSite}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectModal;

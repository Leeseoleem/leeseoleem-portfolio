import React, { useState } from "react";
import Modal from "./Modal";

interface ModalTriggerProps {
  title: string;
  subTitle: string;
  contents: string[];
  description: string;
  technologies: string[];
  position: string[];
  pages: string[];
  details: string[];
  issueResolution: React.ReactNode;
  externalSite: React.ReactNode;
}

const ProjectModal: React.FC<ModalTriggerProps> = ({
  title,
  subTitle,
  contents,
  description,
  technologies,
  position,
  pages,
  details,
  issueResolution,
  externalSite,
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
        <div className="flex flex-col gap-y-8 text-gray-font">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[28px] font-bold">{subTitle}</h3>
            <ul className="list-disc ml-5 text-[20px] text-gray-60">
              {contents.map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <hr />
            <p className="whitespace-pre-line text-[20px]">{description}</p>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-[28px] font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-x-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-3 py-2 rounded-full bg-gray-10 font-semibold text-[20px]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <h3 className="text-[28px] font-bold">My Role</h3>
            <div>
              <h3 className="text-[22px] font-semibold mb-2">
                🧑‍💻 역할 및 포지션
              </h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {position.map((role, index) => (
                  <li key={index}>{role}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold mb-2">📄 담당 페이지</h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {pages.map((page, index) => (
                  <li key={index}>{page}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold mb-2">⚙️ 세부 기능</h3>
              <ul className="list-disc ml-5 text-[18px] text-gray-700">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <h3 className="text-[28px] font-bold">Trouble Shooting</h3>
            <div className="text-[20px]">{issueResolution}</div>
          </div>
          <div className="flex flex-col w-full gap-y-3">
            <h3 className="text-[28px] font-bold">Link</h3>
            <div className="flex w-full text-[20px]">{externalSite}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProjectModal;

import React from "react";
import ProjectCard from "../components/ui/ProjectCard";
import {
  glassBottleProject,
  glassBottleImageUrls,
  VRRS_Project,
  VRRSImageUrls,
  portfolioProject,
} from "../data/projectData";
import {
  handleGlassGit,
  onSnapshotLink,
  handleVRRSGit,
  handleVRRSNotion,
  handleVRRSYoutube,
  envLink,
  handleMyGit,
  handleMyWeb,
} from "../utils/github";
import {
  FaGithubRef,
  GooglePlayIcon,
  YoutubeIcon,
  NotionIcon,
  VelogIcon,
  WebIcon,
} from "../utils/Icons";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="px-4 py-16 md:py-24 space-y-12 bg-gray-white text-gray-font font-pretendard"
    >
      <div className="container px-4">
        <h1 className="text-6xl font-bold mb-12">Projects</h1>
        <div className="flex my-8 flex-col gap-y-6">
          <ProjectCard
            {...portfolioProject}
            externalSite={
              <div className="flex gap-x-8">
                <button onClick={handleMyGit}>
                  <FaGithubRef size="50" />
                </button>
                <button onClick={handleMyWeb}>
                  <WebIcon size="50" />
                </button>
              </div>
            }
          />
          <ProjectCard
            {...glassBottleProject}
            imageUrls={glassBottleImageUrls}
            issueResolution={
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="text-[20px] font-semibold mb-1">이슈 내용</h3>

                  <div className="flex flex-col lg:flex-row py-4 gap-y-2">
                    <p className="text-[18px] font-medium whitespace-pre-line">
                      firebase의 onSnapshot() 사용 후 로그아웃 시 오류:
                      permission-denied
                    </p>
                    <div className="flex flex-col lg:mx-auto">
                      <p className="text-[18px] text-gray-60 whitespace-pre-line">
                        onSnapshot() 함수 내부에 에러 처리 함수 작성하기
                      </p>
                      <div>
                        <button
                          onClick={onSnapshotLink}
                          className="flex items-center gap-x-2 p-2 rounded-md bg-[#1ABC9C] text-white text-[14px]"
                        >
                          <VelogIcon />
                          블로그 링크
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            externalSite={
              <div className="flex gap-x-8">
                <button onClick={handleGlassGit}>
                  <FaGithubRef size="50" />
                </button>
                <button>
                  <GooglePlayIcon size="50" />
                </button>
              </div>
            }
          />
          <ProjectCard
            {...VRRS_Project}
            imageUrls={VRRSImageUrls}
            issueResolution={
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="text-[20px] font-semibold mb-1">이슈 내용</h3>
                  <div className="flex flex-col lg:flex-row py-4 gap-y-2">
                    <p className="text-[18px] font-medium whitespace-pre-line">
                      깃허브 연동 시 서버 api 주소 노출 문제
                    </p>
                    <div className="flex flex-col lg:mx-auto">
                      <p className="text-[18px] text-gray-60 whitespace-pre-line">
                        .env 파일에 전역 변수 형태로 주소 관리
                      </p>
                      <div>
                        <button
                          onClick={envLink}
                          className="flex items-center gap-x-2 p-2 rounded-md bg-[#1ABC9C] text-white text-[14px]"
                        >
                          <VelogIcon />
                          블로그 링크
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            externalSite={
              <div className="flex gap-x-6">
                <button onClick={handleVRRSGit}>
                  <FaGithubRef size="50" />
                </button>
                <button onClick={handleVRRSNotion}>
                  <NotionIcon size="50" />
                </button>
                <button onClick={handleVRRSYoutube}>
                  <YoutubeIcon size="50" />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;

import React from "react";
import { useState } from "react";
import ProjectCard from "../components/ui/ProjectCard";
import { FaGithubRef, GooglePlayIcon, YoutubeIcon } from "../utils/Icons";

const ProjectsSection = () => {
  const handleGit = () => {
    window.location.href = "https://github.com/T-BluePot/GlassBottle";
  };
  return (
    <section
      id="projects"
      className="px-4 py-16 md:py-24 space-y-12 bg-gray-white text-gray-font font-pretendard"
    >
      <div className="container px-4">
        <h1 className="text-6xl font-bold mb-12">Projects</h1>
        <div className="flex flex-wrap my-8 gap-y-6 md:gap-x-6">
          <ProjectCard
            title="Glass Bottle"
            subTitle="유리병 편지 프로젝트"
            contents={[
              "React native + firebase를 활용한 익명 소통 플랫폼",
              "Google Play 스토어 출시를 위한 프로젝트 (비공개 테스트 진행 중)",
            ]}
            description={`GlassBottle은 익명의 편지 기반 커뮤니케이션을 위한 모바일 애플리케이션입니다.\n사용자들이 익명으로 자신의 생각과 감정을 표현하고 공유할 수 있는 편안한 공간을 제공합니다.\n
              GlassBottle은 익명으로 메시지를 보내고 받을 수 있어, 진솔하고 자유로운 소통이 가능합니다.\n사용자들은 '바다에 띄우는 유리병'처럼 자신의 메시지를 작성하고, 다른 사용자들은 이에 공감하거나 위로받을 수 있습니다.`}
            period="2025.01 ~ 2025.03(비공개 테스트 중)"
            n={2}
            position={[
              "Frontend Developer",
              "UI 디자인 및 구현",
              "Firebase 연동",
            ]}
            pages={[
              "시작 페이지 (회원가입, 로그인, 비밀번호 재설정)",
              "내 정보 페이지 (받은 편지, 보낸 편지 확인, 로그아웃, 회원 탈퇴)",
            ]}
            details={[
              "React Native UI 구현 및 Firebase 연동",
              "Firebase Auth | 유저 계정 관리 (회원 가입, 정보 수정, 탈퇴)",
              "Firebase Database | 유저가 작성한/받은 편지 저장 및 확인",
              "React Navigation을 활용한 Bottom Navigator 작성",
              "편지 모달 UI 컴포넌트 개발",
            ]}
            technologies={[
              "React Native",
              "JavaScript",
              "Firebase",
              "Github",
              "Figma",
            ]}
            issueResolution={
              <div className="flex flex-col gap-y-4">
                <div>
                  <h3 className="text-[22px] font-semibold mb-2">이슈 내용</h3>
                  <p className="text-[18px] text-gray-700">
                    firebase의 onSnapshot() 사용 후 로그아웃 시 오류:
                    permission-denied
                  </p>
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold mb-2">해결 방법</h3>
                  <p className="text-[18px] text-gray-700">
                    onSnapshot() 함수 내부에 에러 처리 함수 작성하기
                  </p>
                  <a
                    className="p-2 rounded-md bg-[#1ABC9C] text-white text-[14px]"
                    href="https://velog.io/@leeseoleem1014/이슈-모음-onSnapshot과-로그아웃-기능-충돌"
                  >
                    블로그 링크
                  </a>
                </div>
              </div>
            }
            externalSite={
              <div className="flex gap-x-8">
                <button onClick={handleGit}>
                  <FaGithubRef size="50" />
                </button>
                <button>
                  <GooglePlayIcon size="50" />
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

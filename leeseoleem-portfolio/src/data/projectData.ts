// 유리병 편지 프로젝트
export const glassBottleProject = {
  title: "Glass Bottle",
  subTitle: "유리병 편지 프로젝트",
  contents: [
    "React native + firebase를 활용한 익명 소통 플랫폼",
    "Google Play 스토어 출시를 위한 프로젝트 (비공개 테스트 진행 중)",
  ],
  description: `GlassBottle은 익명의 편지 기반 커뮤니케이션을 위한 모바일 애플리케이션입니다.
      사용자들이 익명으로 자신의 생각과 감정을 표현하고 공유할 수 있는 편안한 공간을 제공합니다.\n
      GlassBottle은 익명으로 메시지를 보내고 받을 수 있어, 진솔하고 자유로운 소통이 가능합니다.
      사용자들은 '바다에 띄우는 유리병'처럼 자신의 메시지를 작성하고, 다른 사용자들은 이에 공감하거나 위로받을 수 있습니다.`,
  period: "2025.01 ~ 2025.03(비공개 테스트 진행 중)",
  n: 2,
  position: ["Frontend Developer", "UI 디자인 및 구현", "Firebase 연동"],
  pages: [
    "시작 페이지 (회원가입, 로그인, 비밀번호 재설정)",
    "내 정보 페이지 (받은 편지, 보낸 편지 확인, 로그아웃, 회원 탈퇴)",
  ],
  details: [
    "React Native UI 구현 및 Firebase 연동",
    "Firebase Auth | 유저 계정 관리 (회원 가입, 정보 수정, 탈퇴)",
    "Firebase Database | 유저가 작성한/받은 편지 저장 및 확인",
    "React Navigation을 활용한 Bottom Navigator 작성",
    "편지 모달 UI 컴포넌트 개발",
  ],
  technologies: ["React Native", "JavaScript", "Firebase", "Github", "Figma"],
};

export const glassBottleImageUrls = [
  "/images/glassBottle/main.jpg",
  "/images/glassBottle/letter.jpg",
  "/images/glassBottle/write.jpg",
  "/images/glassBottle/list.jpg",
];

// 졸업 프로젝트
export const VRRS_Project = {
  title: "채식 어디",
  subTitle: "캡스톤 디자인: 졸업 프로젝트",
  contents: [
    "신한대학교 SW 졸업 프로젝트 (총 9개월 개발)",
    "채식주의자의 편리한 식생활을 지원하는 모바일 애플리케이션",
  ],
  description: `국내 채식 인구가 증가하는 반면, 채식주의자들은 여전히 제품 원재료 판독 및 적절한 식품 선택에 어려움을 겪고 있습니다.  
  '채식 어디'는 "OCR 기반 원재료 판독 및 AI 추천 시스템"을 제공하여, 사용자가 손쉽게 채식 유형별 섭취 가능 여부를 확인하고,  
  본인에게 적합한 제품을 추천받을 수 있도록 돕는 서비스입니다.

  ---  

  📌 핵심 기술 및 특징  

  - React Native (0.76): 크로스플랫폼 개발을 통해 iOS/Android 동시 지원  
  - Clover OCR API: 제품 패키지 원재료를 인식하여 디지털 데이터화  
  - AI 추천 시스템: Partial Match & Jaccard Similarity 기반 유사 제품 추천  
  - Spring Boot (3.3.3): 서버 구축 및 API 개발  
  - Axios/Fetch: REST API와 연결하여 데이터 통신 처리
  - Figma: UI/UX 디자인 및 프로토타입 제작

  '채식 어디'는 단순한 정보 제공을 넘어, 채식주의자들의 식생활을 실질적으로 지원하는 플랫폼을 목표로 합니다.`,

  period: "2024년 03월 ~ 2024년 11월 (총 9개월)",
  n: 4,
  position: [
    "팀장",
    "Frontend Developer(메인)",
    "UI/UX 디자인 총괄",
    "Notion & GitHub 협업 문서 작성",
  ],
  pages: [
    "홈 화면",
    "사전 검색 (제품 원재료 정보 탐색)",
    "판독 기능 (OCR 기반 섭취 가능 여부 분석)",
    "추천 서비스 (유사 제품 추천 알고리즘 적용)",
  ],
  details: [
    "Figma를 활용한 UX/UI 디자인 및 프로토타입 제작",
    "Notion을 활용한 프로젝트 문서화 및 개발 일정 관리",
    "GitHub를 활용한 코드 관리 및 협업 워크플로우 정리 (PR 관리, 코드 리뷰)",
    "React Native를 활용한 모바일 애플리케이션 개발",
    "OCR 기반 원재료 판독 기능 구현 (OCR API 연동)",
    "Axios/Fetch를 활용한 REST API 연동",
  ],
  technologies: [
    "React Native",
    "JavaScript",
    "Spring Boot",
    "Clover OCR",
    "Partial Match Similarity",
    "Jaccard Similarity",
    "Figma",
  ],
};

export const VRRSImageUrls = [
  "/images/vrrs/a.jpg",
  "/images/vrrs/b.jpg",
  "/images/vrrs/c.jpg",
  "/images/vrrs/d.jpg",
  "/images/vrrs/e.jpg",
  "/images/vrrs/h.jpg",
  "/images/vrrs/i.jpg",
  "/images/vrrs/j.jpg",
];

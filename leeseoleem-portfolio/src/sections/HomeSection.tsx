import { ReactTyped } from "react-typed";

// components/sections/HomeSection.tsx
const HomeSection = () => {
  return (
    <section
      id="home"
      className="container mt-12 px-4 py-32 md:py-32 space-y-12 text-gray-font font-pretendard"
    >
      <ReactTyped
        strings={["Hello, I'm seoleem Lee!"]}
        typeSpeed={40} // 타이핑 되는 속도
        backSpeed={10} // 삭제되는 속도
        backDelay={6000} // 삭제 전 대기
        loop // 애니메이션 루프
        className="text-6xl font-bold "
      ></ReactTyped>
      <div className="space-y-4 text-xl text-gray-50">
        <p>
          안녕하세요, 사용자 중심의 직관적이고 매력적인 경험을 만드는
          <br className="md:hidden" />
          프론트엔드 개발자 이서림입니다.
        </p>
        <p>
          저는 팀장으로서 효율적인 협업과 전반적인 진행을 관리한 경험이 있으며,
          <br className="md:hidden" />
          빠르게 프로젝트 요구사항을 이해하고 이를 효과적인 솔루션으로 구현할 수
          있습니다. <br />
          뛰어난 의사소통과 문제 해결 능력을 바탕으로 팀 환경에서 역량을
          발휘하며, <br className="md:hidden" />
          기업과 사용자 모두에게 가치를 전달하는 것을 목표로 합니다.
        </p>
        <p>
          늘 적극적인 자세로 새로운 기술을 배우고 성장하는 개발자가 되겠습니다.
        </p>
      </div>
    </section>
  );
};

export default HomeSection;

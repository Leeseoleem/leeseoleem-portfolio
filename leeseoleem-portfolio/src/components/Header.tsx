import { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full bg-white/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-background/60 z-50 font-pretendard">
      <nav className="container flex justify-between items-center px-6 py-8 text-[20px] text-gray-700">
        {/* 로고 */}
        <h1 className="font-semibold">이서림's Portfolio</h1>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden lg:flex space-x-6 font-medium">
          {["home", "about", "skills", "projects"].map((item) => (
            <li key={item} className="cursor-pointer hover:text-primary">
              <Link
                to={item}
                smooth
                duration={500}
                onClick={() => {
                  console.log("클릭됨!", item);
                }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* 햄버거 버튼 (모바일에서만 보임) */}
        <button className="flex lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {isOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col items-center p-4 space-y-4">
            {["home", "about", "skills", "projects"].map((item) => (
              <li key={item} className="w-full text-center">
                <button
                  className="w-full py-4 rounded hover:bg-gray-100 text-lg"
                  onClick={() => {
                    console.log("클릭됨!", item);
                    const el = document.getElementById(item);
                    el?.scrollIntoView({ behavior: "smooth" });
                    setIsOpen(false);
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

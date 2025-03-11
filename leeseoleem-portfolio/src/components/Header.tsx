import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-screen justify-center bg-white/95 backdrop-blur shadow-sm supports-[backdrop-filter]:bg-background/60 z-50 font-pretendard">
      <nav className="container flex justify-between px-9 py-6 text-[20px]  text-gray-70">
        <h1 className="font-semibold">이서림's portfolio</h1>
        <ul className="flex space-x-6 font-medium">
          <li className="cursor-pointer hover:text-primary ">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary ">
            <Link to="about" smooth duration={500}>
              About
            </Link>
          </li>
          <li className="cursor-pointer hover:text-primary ">
            <Link to="skills" smooth duration={500}>
              Skills
            </Link>
          </li>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>

          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

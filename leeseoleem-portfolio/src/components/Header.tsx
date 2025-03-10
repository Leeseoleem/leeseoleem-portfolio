import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <nav className="flex justify-center space-x-8 p-4">
        <ul className="flex space-x-4">
          <li className="cursor-pointer hover:text-blue-500">
            <Link to="home" smooth duration={500}>
              Home
            </Link>
          </li>
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
          <Link to="about" smooth duration={500}>
            About
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

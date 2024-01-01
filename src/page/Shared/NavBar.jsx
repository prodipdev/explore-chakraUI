import logo from "../../assets/Upwork_Logo.svg.png";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import question from "../../assets/question.svg";
import send from "../../assets/send.svg";
import menu from "../../assets/menu.svg";
import notification from "../../assets/notification.svg";

const NavBar = () => {
  const navLinks = [
    { name: "Jobs", path: "/jobs" },
    { name: "Talent", path: "/talent" },
    { name: "Reports", path: "/reports" },
    { name: "Messages", path: "/messages" },
  ];

  return (
    <nav className="h-16 flex items-center justify-between px-10">
      <div className="flex items-center gap-10">
        <img src={logo} alt="upwork" className="h-6" />
        <ul className="flex items-center gap-5">
          {navLinks.map(({ name, path }) => (
            <li key={path}>
              <a href={path}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-between border px-2 py-1 rounded-full">
          <div className="flex items-center gap-2">
            <FiSearch />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
          <span className="flex items-center gap-1">
            Jobs <MdKeyboardArrowDown />
          </span>
        </div>

        <ul className="flex items-center gap-4 ml-5">
          <li>
            <img src={question} alt="" className="h-6" />
          </li>
          <li>
            <img src={send} alt="" className="h-6" />
          </li>
          <li>
            <img src={menu} alt="" className="h-6" />
          </li>
          <li>
            <img src={notification} alt="" className="h-6" />
          </li>
        </ul>
        <div className="ml-4">
          <img
            className="h-10 w-10 rounded-full"
            src="https://scontent.fjsr1-2.fna.fbcdn.net/v/t39.30808-6/362237826_962672261681884_8704361258993556260_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEAB2vIfEY2vLQRFbkhNkQMTy1vnmmMMlFPLW-eaYwyUVEsot6HjZzQWZF4XJinc9ig8xIKQMiNY2PHoVbfdb52&_nc_ohc=KrvXNdJ1YbMAX91I4Zo&_nc_ht=scontent.fjsr1-2.fna&oh=00_AfAVZeTf78z5yZGvkml1M3sZPZNC8lDDvZMXNK5kJoZTcA&oe=6596E201"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

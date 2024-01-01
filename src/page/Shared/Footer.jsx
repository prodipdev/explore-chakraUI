import { CiFacebook, CiLinkedin, CiYoutube } from "react-icons/ci";
import { AiFillAndroid, AiOutlineApple } from "react-icons/ai";

const Footer = () => {
  const footerLinks = [
    { name: "About Us", path: "/aboutUs" },
    { name: "Feedback", path: "/feedback" },
    { name: "Community", path: "/community" },
    { name: "Trust, Safety & Security", path: "/trustSafetySecurity" },
    { name: "Help & Support", path: "/helpSupport" },
    { name: "Upwork Foundation", path: "/upworkFoundation" },
    { name: "Terms of Service", path: "/termsOfService" },
    { name: "Privacy Policy", path: "/privacyPolicy" },
    { name: "CA Notice at Collection", path: "/caNotice" },
    { name: "Cookie Settings", path: "/cookieSettings" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Desktop App", path: "/desktopApp" },
    { name: "Cookie Policy", path: "/cookiePolicy" },
    { name: "Enterprise Solution", path: "/enterpriseSolution" },
  ];

  // this part create to help me chatGPT
  const columns = 4;
  const firstTwoColumns = 2;
  const remainingColumns = columns - firstTwoColumns;

  const columnItems = Array.from({ length: columns }, (_, column) => {
    if (column < firstTwoColumns) {
      return footerLinks
        .filter((_, index) => index % firstTwoColumns === column)
        .slice(0, 3);
    }

    return footerLinks
      .filter(
        (_, index) => index % remainingColumns === column - firstTwoColumns
      )
      .slice(0, 4);
  });

  return (
    <footer className="bg-gray-900 py-6 text-gray-100 px-20 rounded-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {columnItems.map((columnLinks, index) => (
            <ul key={index} className="w-full md:w-1/4">
              {columnLinks.map((link, linkIndex) => (
                <li key={linkIndex} className="py-1">
                  <a href={link.path} className=" hover:text-blue-500">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-1">
          <p>Follow Us</p>{" "}
          <ul className="flex gap-2">
            <li className="p-1 border border-green-300 rounded-full h-fit w-fit">
              <a href="#">
                <CiFacebook className="text-3xl" />
              </a>
            </li>
            <li className="p-1 border border-green-300 rounded-full h-fit w-fit">
              <a href="#">
                <CiLinkedin className="text-3xl" />
              </a>
            </li>
            <li className="p-1 border border-green-300 rounded-full h-fit w-fit">
              <a href="#">
                <CiYoutube className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-1">
          <p>Mobile App</p>{" "}
          <ul className="flex gap-2">
            <li className="p-1 border border-green-300 rounded-full h-fit w-fit">
              <a href="#">
                <AiOutlineApple className="text-3xl" />
              </a>
            </li>
            <li className="p-1 border border-green-300 rounded-full h-fit w-fit">
              <a href="#">
                <AiFillAndroid className="text-3xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="mt-8 border border-green-300" />
      <p className="mt-5 text-center">© 2015 - 2023 Upwork® Global Inc.</p>
    </footer>
  );
};

export default Footer;

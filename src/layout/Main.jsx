import Home from "../page/Home/Home/Home";
import Footer from "../page/Shared/Footer";
import NavBar from "../page/Shared/NavBar";

const Main = () => {
  return (
    <div className="max-w-[1552px] mx-auto">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default Main;

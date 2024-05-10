import Navbar from "../components/Navbar/Navbar";
import About from "./LandingPage/About";
import Feature from "./LandingPage/Feature";
import Footer from "./LandingPage/Footer";
// import Images from "./LandingPage/Images";
import Initial from "./LandingPage/Initial";
import Marquee from "./LandingPage/Marquee";

const LandingPage = () => {
  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <Initial />
      <Marquee />
      <About />
      <Feature />
    </div>
  );
};

export default LandingPage;

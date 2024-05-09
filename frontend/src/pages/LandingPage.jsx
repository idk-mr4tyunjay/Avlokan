import Navbar from "../components/Navbar/Navbar";
import Initial from "./LandingPage/Initial";
import Marquee from "./LandingPage/Marquee";

const LandingPage = () => {
  return (
    <div className="bg-gray-200 ">
      <Navbar />
      <Initial />
      <Marquee />
    </div>
  );
};

export default LandingPage;

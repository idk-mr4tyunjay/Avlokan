import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  //{userInfo}
  // const [searchQuery, setSearchQuery] = useState("");
  // const navigate = useNavigate();

  // const onLogout = () => {
  //   localStorage.clear();
  //   navigate("/login");
  // }
  const navigate = useNavigate();
  const handleClick = () => {
    // Navigate to a different route
    navigate("/getin");
  };

  const [showBox, setShowBox] = useState(false);
  const toggleBox = () => {
    setShowBox(!showBox);
  };
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showBox &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setShowBox(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showBox]);

  return (
    <>
      <div className="w-screen overflow-hidden relative">
        {/* navbar */}
        <div className="w-screen py-6 px-5 lg:px-64 flex justify-between text-zinc-900 backdrop-blur-sm fixed">
          <span className="text-lg font-semibold">Avlokan</span>

          <div className="hidden md:flex items-center space-x-5">
            
            <button onClick={handleClick}><h3 className="px-5">Get In</h3></button>

            <h3 className="px-5">
            <button ref={toggleButtonRef} onClick={toggleBox}>Menu</button>
            </h3>
          </div>

          {/* hamburger menu */}
          <button className="space-y-1 group md:hidden">
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>
            <div className="w-6 h-1 bg-white"></div>

            {/* menu */}
            <ul className="bg-[#252525] w-screen pb-10 absolute -top-full group-focus:top-0 right-0 duration-150 flex flex-col space-y-3 justify-end">
              <button className="px-10 py-8 relative ml-auto">
                <div className="w-6 h-1 rotate-45 absolute bg-white"></div>
                <div className="w-6 h-1 -rotate-45 absolute bg-white"></div>
              </button>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                About
              </li>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                Contact
              </li>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                Service
              </li>
              <li className="flex justify-center w-full py-4 hover:bg-[#202020]">
                Help
              </li>
            </ul>
          </button>
        </div>
      </div>
      {showBox && (
        <div className="absolute top-16 right-56 flex flex-col justify-center w-60 h-60 bg-white z-50 rounded-lg">
          <button className="py-5">Home</button>
          <button className="py-5">About Us</button>
          <button className="py-5">Conatact Us</button>
        </div>
      )}
    </>
  );
};

export default Navbar;

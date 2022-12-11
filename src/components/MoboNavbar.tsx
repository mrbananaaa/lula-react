import { Link } from "react-router-dom";
import { Menu as MenuIcn } from "react-feather"
import logoImg from "../assets/logo.png";

const MoboNavbar = () => {
  return (
    <div className="md:hidden">
      <div className="fixed w-full px-12 flex justify-between items-center z-20 h-[15vh] bg-gradient-to-b from-black to-our-dark">
        <Link to="/">
          <img
            className="w-10" 
            src={logoImg} 
            alt="lula-logo" 
          />
        </Link>
        <label>
          <MenuIcn />
        </label>
      </div>
    </div>
  );
};

export default MoboNavbar;

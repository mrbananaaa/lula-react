import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  const pathName = useLocation().pathname;
  const navigate = useNavigate();
  const [isScroll, setIsScroll] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, [isScroll]);

  return (
    <div className="hidden md:block">
      <div
        className={`
        fixed w-full px-12 flex justify-between items-center z-20 h-[15vh]
        ${isScroll && `bg-gradient-to-b from-black to-our-dark`}
        `}
      >
        <Link to="/">
          <img
            className="w-14 h-14 object-contain"
            src={logoImg}
            alt="lula-logo"
          />
        </Link>
        <ul className="flex items-center space-x-8 font-medium text-lg">
          {(
            [
              ["/", "Home"],
              ["/about", "About"],
              ["/shop", "Shop"],
              ["/blog", "Blog"],
              ["/shipping", "Shipping"],
            ] as const
          ).map(([to, label]) => (
            <li
              className={`
                ${pathName === to ? "text-white" : "text-our-gray"}
                py-8 hover:text-white duration-150
              `}
              key={to}
            >
              <Link to={to}>{label}</Link>
            </li>
          ))}
          <li>
            <button
              className="button px-4 py-2"
              onClick={() => navigate("/signin")}
            >
              Sign In
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

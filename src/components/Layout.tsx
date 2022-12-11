import { Outlet } from "react-router-dom";
import MoboNavbar from "./MoboNavbar";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <MoboNavbar />
      <main className="md:pt-[15vh]">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

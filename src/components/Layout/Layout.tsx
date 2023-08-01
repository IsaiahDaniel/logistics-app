import Sidebar from "../shared/Sidebar/Sidebar";
import Header from "../shared/Header/Header";
import MobileMenu from "../shared/Sidebar/MobileMenu";
import { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <main className="flex items-center justify-between">
      {showMenu && (
        <div className="block md:hidden z-50">
          <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
      )}
      <section className="hidden md:flex">
        <Sidebar />
      </section>
      <section className="flex-1">
        <div className="md:ml-[20%] lg:ml-[20%]">
          <Header showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        <div className="md:ml-[22%] lg:ml-[22%] px-2">
          { showMenu && <Backdrop /> }  
          {children}
        </div>
      </section>
    </main>
  );
};

export default Layout;

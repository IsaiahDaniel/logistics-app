import React, { useState } from "react";
import { Logo } from "../../../constants/images/images";
import { AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";

type HeaderProps = {
  showMenu: any;
  setShowMenu: any;
}

const Header = ({ showMenu, setShowMenu  }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between shadow-lg p-5">
      <div>
        <img src={Logo} alt="Logos" className="w-64" />
      </div>

      <div className="block cursor-pointer md:hidden" onClick={() => setShowMenu(!showMenu)}>
        <AiOutlineMenu size={35} />
      </div>

      <div className="md:flex items-center hidden">
        <AiOutlineLogout size={22} className="mr-1" />
        <p>Logout</p>
      </div>
    </header>
  );
};

export default Header;

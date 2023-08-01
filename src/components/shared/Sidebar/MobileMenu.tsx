import { RxDashboard, RiAdminLine, GrTransaction } from "../../../constants/icons/icons";
import { AiOutlineClose, AiOutlineTransaction, AiOutlineUser } from "react-icons/ai";
import { TfiTruck } from "react-icons/tfi";
import { IoLogOut } from 'react-icons/io5'

import SidebarItem from "./SidebarItem";
import Backdrop from "../../UI/Backdrop/Backdrop";

type MobileMenuProps = {
  showMenu: any;
  setShowMenu: any;
}

const MobileMenu = ({ setShowMenu, showMenu }: MobileMenuProps) => {
  return (
    <aside className="w-[70%] md:w-[20%] shadow-2xl min-h-screen bg-black text-white fixed top-0 bottom-0">
      <div className="flex flex-col items-end justify-end cursor-pointer px-5 mt-5" onClick={() => setShowMenu(false)}>
        {/* <img src={BG} alt="" className="w-20 h-20 rounded-full" /> */}
        <AiOutlineClose size={33} />
      </div>

      <div className="py-10">
        <SidebarItem Icon={RxDashboard} text="Dashboard" to="/dashboard" />

        <div className="px-10 mt-10 mb-4">
          <h3 className="text-2xl text-gray-600">Shipping Info</h3>
        </div>
        <SidebarItem iconStyles={{ color: "white" }} Icon={AiOutlineTransaction} text="Orders" to="/orders" />
        <SidebarItem Icon={TfiTruck} text="Tracking" to="/tracking" />
        {/* <SidebarItemDropdown
          Icon={RiAdminLine}
          menu="Shipping"
          items={[
            { title: "orders", to: "/orders" },
            { title: "Tracking", to: "/tracking" }, 
          ]}
        /> */}

        <div className="px-10 mt-4 mb-4">
          <h3 className="text-2xl text-gray-600">Profile Info</h3>
        </div>
        <SidebarItem Icon={AiOutlineUser} text="Profile" to="/profile" />

        <div
          onClick={() => {
            // dispatch(logout());
            // dispatch(reset());
            // navigate("/")
          }}
          className="flex items-start px-10 text-black py-5 sidebarNav cursor-pointer"
        >
          <IoLogOut size={25} />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  )
}

export default MobileMenu
import { RxDashboard, RiAdminLine, IoLogOut, GrTransaction } from "../../../constants/icons/icons";
import { GiBookmark } from "react-icons/gi";

import SidebarItem from "./SidebarItem";
import SidebarItemDropdown from "./SidebarItemDropdown";
import { AiOutlineTransaction, AiOutlineUser } from "react-icons/ai";
import { TfiTruck } from "react-icons/tfi";

// import { useDispatch, useSelector } from "react-redux";
// import { NavLink, useNavigate } from "react-router-dom";
// import { logout, reset } from "../../../slices/auth/authSlice";

const Sidebar = () => {
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  return (
    <aside className="w-[70%] md:w-[20%] shadow-2xl min-h-screen bg-black text-white fixed top-0 bottom-0">
      <div className="flex flex-col items-center justify-center mt-5">
        {/* <img src={BG} alt="" className="w-20 h-20 rounded-full" /> */}
        <h4 className="text-black font-bold mt-4">username</h4>
        <p className="text-black">Administrator</p>
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
        {/* <SidebarItemDropdown
          Icon={RiAdminLine}
          menu="users"
          items={[
            { title: "Shipping", to: "/pending-reviews" },
            { title: "Tracking", to: "/approved-reviews" }, 
          ]}
        /> */}

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
  );
};

export default Sidebar;

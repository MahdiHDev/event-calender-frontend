import { BiSolidDashboard } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdCategory, MdEventAvailable } from "react-icons/md";
import { PiSignOutBold } from "react-icons/pi";
import { NavLink } from "react-router";
import Logo from "../assets/logo.png";

const Sidebar = () => {
    const navLinks = [
        {
            name: "Dashboard",
            link: "/",
            icon: (
                <BiSolidDashboard className="text-xl group-hover:text-primary" />
            ),
        },
        {
            name: "Events",
            link: "/events",
            icon: (
                <MdEventAvailable className="text-xl group-hover:text-primary" />
            ),
        },
        {
            name: "Events Category",
            link: "/event-category",
            icon: <MdCategory className="text-xl group-hover:text-primary" />,
        },
    ];
    return (
        <div className="w-[240px] flex flex-col shrink-0 h-full bg-secondary rounded-2xl">
            <div className="shrink-0 flex px-5 h-[90px] items-center">
                <img
                    src={Logo}
                    alt="Flytech IT Logo"
                    className="w-[120px] shrink-0 object-contain"
                />
            </div>
            <span className="shrink-0 px-5">
                <hr className="h-px w-full border-gray-300 mt-auto" />
            </span>
            <div className="h-full flex flex-col">
                <h1 className="font-medium text-sm px-5 pt-5 pb-3 text-[#7A7A7A] tracking-wide">
                    MENU
                </h1>
                <ul>
                    {navLinks.map((nav, i) => (
                        <li key={i}>
                            <NavLink
                                to={nav.link}
                                className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-[#032857]"
                            >
                                <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#2ea1e2,#075294)]"></span>
                                {nav.icon}
                                {nav.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <h1 className="font-medium text-sm px-5 pt-0 pb-3 text-[#7A7A7A] tracking-wide mt-auto">
                    GENERAL
                </h1>
                <ul className="pb-5">
                    <li>
                        <NavLink
                            to={"/users"}
                            className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-[#032857]"
                        >
                            <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#2ea1e2,#075294)]"></span>
                            <FaChalkboardTeacher className="text-xl group-hover:text-primary" />
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/logout"}
                            className="flex items-center font-medium gap-2 group text-[#7A7A7A] hover:text-[#032857]"
                        >
                            <span className="h-10 w-2 rounded-r-lg bg-transparent group-hover:bg-[linear-gradient(to_right_top,#2ea1e2,#075294)]"></span>
                            <PiSignOutBold className="text-xl group-hover:text-primary" />
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;

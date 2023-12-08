import React from "react";
import { Home, Search, User2, PlusSquare, Compass, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
export default function MobileNavbar() {
  const navLink = [
    {
      url: "/",
      id: "1",
      icons: <Home className="dark:text-white" size={23} />,
    },
    {
      url: "/explore",
      id: "2",
      icons: <Compass className="dark:text-white" size={23} />,
    },
    {
      url: "/create",
      id: "4",
      icons: <PlusSquare className="dark:text-white" size={23} />,
    },
    {
      url: "/search",
      id: "3",
      icons: <Search className="dark:text-white" size={23} />,
    },

    {
      url: "/profile",
      id: "5",
      icons: <User2 className="dark:text-white" size={23} />,
    },
  ];

  return (
    <div className="">
      <ul className="flex items-center justify-between bg-gray-100 rounded-lg px-3 py-4 mx-auto">
        {navLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.url}
            className="flex items-center justify-start gap-3 dark:text-white"
          >
            {item.icons}
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

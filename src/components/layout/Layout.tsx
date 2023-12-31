import React from "react";
import SideBar from "./SideBar";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" dark:text-white dark:bg-black pt-6 ">
      <div className="hidden lg:block">
        <SideBar />
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;

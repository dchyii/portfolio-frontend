import React from "react";
import SideBarIcon from "../subcomponents/SideBarIcon";

const SideBar = () => {
  return (
    <div className="w-full lg:w-24 h-16 lg:h-full grid grid-cols-4 lg:grid-cols-1 justify-items-center border-2 border-slate-100/0 border-t-slate-100/50 lg:border-t-slate-100/0 lg:border-r-slate-100">
      <SideBarIcon name={"profile"} />
      <SideBarIcon name={"tech stack"} />
      <SideBarIcon name={"projects"} />
      <SideBarIcon name={"contact"} />
    </div>
  );
};

export default SideBar;

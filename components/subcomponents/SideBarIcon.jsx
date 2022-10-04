import React from "react";
import SVGIcon from "./SVGIcon";

const SideBarIcon = (props) => {
  return (
    <div className="group relative h-fit mt-3 flex items-start hover:cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 md:w-12 lg:w-16 aspect-square hover:text-orange-500 z-50 bg-white"
      >
        <SVGIcon icon={props.name} />
      </svg>
      <div
        className="absolute left-0 lg:group-hover:left-16 ml-2 px-3 py-3 rounded-r-lg bg-white min-w-max text-xl font-semibold border border-l-4 border-l-white border-slate-300
      opacity-0 lg:group-hover:opacity-100 invisible lg:group-hover:visible transition-all duration-500 ease-in-out"
      >
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default SideBarIcon;

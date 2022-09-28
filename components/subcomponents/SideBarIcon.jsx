import React from "react";

const SideBarIcon = () => {
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
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
      <div
        className="absolute left-0 lg:group-hover:left-16 ml-2 px-3 py-3 rounded-r-lg bg-white min-w-max text-xl font-semibold border border-l-4 border-l-white border-slate-300
      opacity-0 lg:group-hover:opacity-100 invisible lg:group-hover:visible transition-all duration-500 ease-in-out"
      >
        icon name
      </div>
    </div>
  );
};

export default SideBarIcon;

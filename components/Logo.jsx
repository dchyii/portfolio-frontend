import React from "react";

const Logo = (props) => {
  return (
    <div
      className={`group relative ${props.width} ${props.height} overflow-hidden`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" w-full h-full text-red-100 absolute top-48 group-hover:top-0 group-hover:text-red-700 transition-all duration-500 ease-in-out"
      >
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" w-full h-full text-red-500 absolute bottom-0 group-hover:bottom-48 group-hover:text-red-100 transition-all duration-500 ease-in-out"
      >
        <path
          fillRule="evenodd"
          d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Logo;

import React from "react";

const SideBar = () => {
  return (
    <div className="w-full lg:w-24 h-16 lg:h-full grid grid-cols-4 lg:grid-cols-1 justify-items-center border-4 border-orange-300/0 border-t-orange-300 lg:border-t-orange-300/0 lg:border-r-orange-300">
      <div className="aspect-square w-16">1</div>
      <div className="aspect-square w-16">2</div>
      <div className="aspect-square w-16">3</div>
      <div className="aspect-square w-16">4</div>
    </div>
  );
};

export default SideBar;

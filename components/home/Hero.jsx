import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full pb-32 lg:pb-48 snap-start flex flex-col-reverse">
      <div>
        <h3 className="text-xl font-semibold font-mono">
          {"<p>"} Hello World {"</p>"}
        </h3>
        <h1 className="text-3xl font-semibold py-3">
          I am{" "}
          <span className="text-5xl font-extrabold py-3 text-orange-500">
            Desmond!
          </span>
        </h1>
        <h2 className="text-2xl font-mono max-w-4xl">
          I am a full stack developer, building tools to bring improvement to
          our everyday lives.
        </h2>
      </div>
    </div>
  );
};

export default Hero;

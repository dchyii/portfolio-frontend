import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full snap-start pt-12 lg:pt-36 lg:flex lg:flex-row-reverse">
      <div className="w-3/4 lg:w-2/5 mx-auto">
        {/* image placeholder for profile pic */}
        <Image
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="profile"
          width={320}
          height={320}
          layout="responsive"
          className="rounded-full"
        />
      </div>
      <div className="mt-16 max-w-2xl h-fit items-end border border-yellow-500">
        <h3 className="text-xl font-semibold font-mono">Hello World</h3>
        <h1 className="text-3xl font-semibold py-3">
          I am{" "}
          <span className="text-5xl font-extrabold py-3 text-orange-500">
            Desmond!
          </span>
        </h1>
        <h2 className="text-2xl font-mono">
          I am a full stack developer, building tools to bring improvement to
          our everyday lives.
        </h2>
      </div>
    </div>
  );
};

export default Hero;

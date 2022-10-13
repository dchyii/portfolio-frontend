import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-full pb-6 snap-start flex flex-col-reverse border border-green-500">
      <div className="h-fit max-w-5xl border border-yellow-500">
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
      <div className="mt-6 mx-auto max-w-full sm:max-w-md lg:max-w-xl grow aspect-square border border-orange-500">
        {/* image placeholder for profile pic */}
        <Image
          src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
          alt="profile"
          width={160}
          height={160}
          layout="responsive"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Hero;

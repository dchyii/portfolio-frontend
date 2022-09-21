import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Logo from "../logo";

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="w-full h-16 bg-slate-700 text-white pt-3 text-2xl">
      <ul className="w-full lg:w-5/6 xl:w-4/5 mx-auto px-5 gap-x-3 flex">
        <li className="grow group cursor-pointer">
          <Link href="/">
            <a className="flex">
              dchyii
              <span className="-translate-y-2">
                <Logo width={"w-8"} height={"h-8"} />
              </span>
            </a>
          </Link>
        </li>
        <li className="w-20 grid justify-items-center hover:font-extrabold hover:text-orange-500">
          <Link href="/">
            <a className={router.asPath === "/" ? "text-orange-500" : ""}>
              about
            </a>
          </Link>
        </li>
        <li className="w-20 grid justify-items-center hover:font-extrabold hover:text-orange-500">
          <Link href="/blog">
            <a className={router.asPath === "/blog" ? "text-orange-500" : ""}>
              blog
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

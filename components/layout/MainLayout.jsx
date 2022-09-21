import Logo from "../logo";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="flex h-screen pt-20 px-8">
        <div className="hidden lg:block lg:w-1/12 xl:w-1/10"></div>
        <div className="grow pb-6 overflow-scroll">
          <main>{children}</main>
        </div>
        <div className="hidden lg:block lg:w-1/12 xl:w-1/10 relative">
          <div className="absolute inset-x-0 bottom-0">
            <Logo width={"w-full"} />
          </div>
        </div>
      </div>
    </>
  );
}

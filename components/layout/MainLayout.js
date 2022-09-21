import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div className="w-full lg:w-5/6 xl:w-4/5 h-screen mx-auto pt-20 pb-6 px-5 overflow-scroll">
        <main>{children}</main>
      </div>
    </>
  );
}

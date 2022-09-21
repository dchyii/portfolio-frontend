import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}

import dynamic from "next/dynamic";

const NavbarLazy = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

const Layout = ({ children }) => {
  return (
    <>
      <NavbarLazy></NavbarLazy>
      {children}
    </>
  );
};

export default Layout;

import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <header className="bg-orange-600 ">
      <nav className="container-custom px-12 py-3 flex justify-between items-center max-lg:justify-center">
        <Logo />
        <NavMenu />
      </nav>
    </header>
  );
}

export default Navbar;

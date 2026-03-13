import NavItem from "./NavItem";

function NavMenu() {
  const links = [
    "Home",
    "About",
    "Pooja & Seva",
    "Events",
    "Gallery",
    "Donate",
    "Contact",
  ];

  return (
    <ul className="flex items-center gap-8">
      {links.map((link, index) => (
        <NavItem key={index} label={link} />
      ))}
    </ul>
  );
}

export default NavMenu;

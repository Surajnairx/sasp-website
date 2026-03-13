function NavItem({ label }) {
  return (
    <li className="text-white text-lg font-medium hover:text-yellow-500 cursor-pointer">
      {label}
    </li>
  );
}

export default NavItem;

function NavItem({ label, link }) {
  return (
    <a href={link}>
      <li className="text-inherit text-lg font-medium hover:text-yellow-500 cursor-pointer hover:bg-amber-900 rounded-lg shrink-0 p-1.5">
        {label}
      </li>
    </a>
  );
}

export default NavItem;

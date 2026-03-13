import logo from "../../assets/website-icon.jpeg";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="temple logo" className="h-8 w-8" />
      <span className="text-white font-semibold text-lg cursor-pointer">
        Shree Ayyappa Seva Parishad
      </span>
    </div>
  );
}

export default Logo;

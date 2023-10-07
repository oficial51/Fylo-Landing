
import icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="px-[16px] bg-[#1B2330] flex items-center justify-between pt-[30px]">
      <img src={icon} className="w-[88px] h-[25px]" alt="fylo icon" />
      <nav className="flex text-[15px] hover:text-white  text-[#D5DDE8] gap-[17px]">
        <a href="#" className="transition-all  duration-200 hover:underline">Features</a>
        <a href="#" className="transition-all  duration-200 hover:underline" >Team</a>
        <a href="#" className="transition-all  duration-200 hover:underline">Sign In</a>
      </nav>
    </div>
  );
};

export default Navbar;
 
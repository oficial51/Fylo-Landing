
import icon from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="px-[16px] lg:px-[80px] lg:pt-[71px] bg-[#1B2330] flex items-center justify-between pt-[30px]">
      <img src={icon} className="w-[88px] lg:w-[180px] lg:h-[53px] h-[25px]" alt="fylo icon" />
      <nav className="flex text-[15px] lg:text-[18px] lg:gap-[55px]  hover:text-white   text-[#D5DDE8] gap-[17px]">
        <a href="#features" className="transition-all hover:scale-105 duration-200 hover:underline">Features</a>
        <a href="#team" className="transition-all hover:scale-105 duration-200 hover:underline" >Team</a>
        <a href="#team" className="transition-all hover:scale-105 duration-200 hover:underline">Sign In</a>
      </nav>
    </div>
  );
};

export default Navbar;
 
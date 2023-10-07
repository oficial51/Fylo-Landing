import icon from "../assets/logo.svg";
import email from "../assets/icon-email.svg";
import phone from "../assets/icon-phone.svg";
import location from "../assets/icon-location.svg";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="pt-[72px] text-[14px] bg-[#0C1524] flex flex-col items-center  text-[#D5DDE8] px-[27px]">
      <div className="w-[325px] z-20">
        <img src={icon} className="h-[52px] z-20 pl-3" alt="Fylo icon" />
        <div className="mt-[48px] gap-[17px] z-20 flex">
          <img src={location} className="h-[20px]" alt="location icon" />
          <p className="z-20">
            Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit, sed
            do <br /> eiusmod tempor incididunt ut labore <br /> et dolore magna
            aliqua
          </p>
        </div>
        <div className="mt-[27px] gap-[17px] flex">
          <img src={phone} className="h-[20px]" alt="location icon" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="mt-[27px] gap-[17px] flex">
          <img src={email} className="h-[20px]" alt="location icon" />
          <p>example@fylo.com</p>
        </div>
        <nav className="pt-[86px] text-[16px] text-white flex flex-col">
          <a href="#" className="pb-[25px]">
            About Us
          </a>
          <a href="#" className="pb-[25px]">
            Jobs
          </a>
          <a href="#" className="pb-[25px]">
            Press
          </a>
          <a href="#" className="">
            Blog
          </a>
          <a href="#" className="pt-[50px] pb-[25px]">
            Contact Us
          </a>
          <a href="#" className="pb-[25px]">
            Terms
          </a>
          <a href="#" className="pb-[25px]">
            Privacy
          </a>
        </nav>
        <div className="flex pb-[45px] justify-center items-center gap-[10px]">
          <div className="border hover:scale-105 p-[2px] rounded-full">
            <BiLogoFacebook className="w-[27px] h-[27px]"></BiLogoFacebook>
          </div>
          
          <div className="border p-[2px] hover:scale-105 rounded-full">
          <BiLogoTwitter className="w-[27px] rounded-full h-[27px]"></BiLogoTwitter>
          </div>
          <div className="border hover:scale-105 p-[2px] rounded-full">
          <BiLogoInstagram className="w-[27px] rounded-full h-[27px]"></BiLogoInstagram>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;

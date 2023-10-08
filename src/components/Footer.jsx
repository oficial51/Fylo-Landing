import icon from "../assets/logo.svg";
import email from "../assets/icon-email.svg";
import phone from "../assets/icon-phone.svg";
import location from "../assets/icon-location.svg";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="pt-[72px] text-[14px] bg-[#0C1524] pb-10 flex lg:items-start flex-col items-center  text-[#D5DDE8] px-[27px]">
      <div className="w-[325px] self-center lg:w-[1250px] z-20">
        <img src={icon} className="h-[52px] z-20 pl-3" alt="Fylo icon" />
        <div className="lg:flex lg:justify-between">
          {" "}
          <div className="mt-[48px] gap-[17px] z-20 flex">
            <img src={location} className="h-[20px]" alt="location icon" />
            <p className="z-20">
              Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit,
              sed do <br /> eiusmod tempor incididunt ut labore <br /> et dolore
              magna aliqua
            </p>
          </div>
          <div className="lg:flex lg:flex-col">
            <div className="mt-[27px] lg:mt-[48px] gap-[17px] flex">
              <img src={phone} className="h-[20px]" alt="location icon" />
              <p>+1-543-123-4567</p>
            </div>
            <div className="mt-[27px]  gap-[17px] flex">
              <img src={email} className="h-[20px]" alt="location icon" />
              <p>example@fylo.com</p>
            </div>
          </div>
          <nav className="pt-[86px] lg:pt-[48px] lg:gap-[80px] text-[16px] text-white flex lg:flex-row flex-col">
            <div className="flex flex-col">
              <a href="#intro" className="pb-[25px] lg:pb-[13px]">
                About Us
              </a>
              <a href="#team" className="pb-[25px] lg:pb-[13px]">
                Jobs
              </a>
              <a href="#team" className="pb-[25px] lg:pb-[13px]">
                Press
              </a>
              <a href="#" className="">
                Blog
              </a>
            </div>
            <div className="flex flex-col">
              <a href="#" className="pt-[50px]  lg:pb-[13px] lg:pt-0 pb-[25px]">
                Contact Us
              </a>
              <a href="#" className="pb-[25px] lg:pb-[13px]">
                Terms
              </a>
              <a href="#" className="pb-[25px] lg:pb-0">
                Privacy
              </a>
            </div>
          </nav>
          <div className="flex pb-[45px] lg:mt-[-35px] justify-center items-center gap-[10px]">
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
    </div>
  );
};

export default Footer;

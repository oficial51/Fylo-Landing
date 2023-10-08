/* eslint-disable react/prop-types */
import intro from "../assets/illustration-intro.png";
import "./Intro.css";


const Intro = ({size}) => {

  return (
    <section className="flex bg-[#1B2330] flex-col items-center pt-[48px]">
      <div className="absolute lg:top-[639px] top-[260px] z-10 w-full h-[250px] Wavy"></div>
      <img id="intro"
        src={intro}
        className="h-[225px] lg:h-[540px] lg:w-[700px] z-20 w-[310px]"
        alt=""
      />

      {size.width > 1024 ? (
        <h1 className="text-center bg mt-[40px] font-bold z-20 text-white text-[34px]">
          All your files in one secure location, <br /> accessible anywhere.
        </h1>
      ) : (
        <h1 className="text-center bg mt-[40px] font-bold z-20 text-white text-[25px]">
          All your files in one secure <br /> location, accessible <br />{" "}
          anywhere.
        </h1>
      )}
      <div className="bg-[#181F2B] flex items-center  flex-col w-full z-20">
        {size.width > 1024 ? (
          <p className="text-center  text-[#D5DDE8] text-[18px] mt-[25px]">
            Fylo stores all your most important files in  one secure
            location.<br /> Access them wherever  you need, share and
            collaborate with <br /> friends family, and co-workers.
          </p>
        ) : (
          <p className="text-center  text-[#D5DDE8] text-[16px] mt-[25px]">
            Fylo stores all your most important files in <br /> one secure
            location. Access them wherever <br /> you need, share and
            collaborate with friends <br /> family, and co-workers.
          </p>
        )}

        <button className="mt-[34px] transition-all duration-200 ease-in-out hover:scale-105 lg:h-[57px] shadow-lg text-bold text-[18px] text-[#EAFFFF] introButtonBg h-[48px] rounded-full lg:w-[283px] w-[240px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Intro;

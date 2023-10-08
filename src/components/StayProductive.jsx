/* eslint-disable react/prop-types */
import photo from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";

const StayProductive = ({ size }) => {
  return (
    <section className="flex lg:gap-[57px] lg:flex-row flex-col lg:justify-center pb-[170px] items-center">
      <img className="mt-[70px] px-[28px]" src={photo} alt="bg photo" />

      <div className="text-[#D5DDE8]">
        <h2 className="text-white font-bold lg:text-[40px] text-[18px] mt-[55px]">
          Stay productive, {size.width > 1024 ? <br /> : null} wherever you are
        </h2>
        <p className=" mt-[20px] lg:text-[20px] text-[14px]">
          Never let location be an issue when accessing
          {size.width < 1024 ? <br /> : null}
          your files. Fylo has you {size.width > 1024 ? <br /> : null} covered
          for all of your file&nbsp;
          {size.width < 1024 ? <br /> : null}
          storage needs.
        </p>
        <p className=" mt-[16px] lg:text-[20px] text-[14px]">
          Securely share files and folders with friends,
          {size.width < 1024 ? <br /> : null}
          family and colleagues for live {size.width > 1024 ? (
            <br />
          ) : null}{" "}
          collaboration. No&nbsp;
          {size.width < 1024 ? <br /> : null}
          email attachments required.
        </p>
        <div className="self-start lg:w-[206px] w-[152px] border-b hover:scale-105  translateArrow transition-all ease-in-out duration-300 border-[#8CB5BB] pb-1  text-[#8CB5BB]">
          <a href="#" className="mt-[16px] flex lg:text-[20px] text-[14px] ">
            See how Fylo works
            <span className=" ml-1 transition-all relative arrow top-[1px] self-center">
              <img className="w-[20px]" src={arrow} alt="arrow" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;

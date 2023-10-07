import photo from "../assets/illustration-stay-productive.png";
import arrow from "../assets/icon-arrow.svg";


const StayProductive = () => {
  return (
    <section className="flex flex-col pb-[170px] items-center px-[28px]">
      <img className="mt-[70px]" src={photo} alt="bg photo" />
      <h2 className="text-white font-bold text-[18px] mt-[55px]">
        Stay productive, wherever you are
      </h2>
      <div className="text-[#D5DDE8]">
        <p className=" mt-[20px] text-[14px]">
          Never let location be an issue when accessing
          <br />
          your files. Fylo has you covered for all of your file
          <br />
          storage needs.
        </p>
        <p className=" mt-[16px] text-[14px]">
          Securely share files and folders with friends,
          <br />
          family and colleagues for live collaboration. No
          <br />
          email attachments required.
        </p>
        <div className="self-start w-[148px] border-b hover:scale-105  translateArrow transition-all ease-in-out duration-300 border-[#8CB5BB] pb-1  text-[#8CB5BB]">
        <a href="#" className="mt-[16px] flex  text-[14px] ">
          See how Fylo works
          <span className=" ml-1 transition-all relative arrow top-[1px] self-center">
            <img className="" src={arrow} alt="arrow" />
          </span>
        </a>
      </div>
      </div>
      
    </section>
  );
};

export default StayProductive;

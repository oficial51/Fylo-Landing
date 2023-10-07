/* eslint-disable react/prop-types */
const TestimonialCard = ({ text1, text2, text3, text4, photo, name, job }) => {
  return (
    <div className="h-[161px] shadow-2xl mb-[24px] rounded-md bg-[#21293C] w-[282px]">
      <div className="pt-[23px] px-[16px]">
        <p className="text-[11px] text-[#D5DDE8]">
          {text1} <br /> {text2} <br /> {text3} <br /> {text4}
        </p>
        <div className="flex items-center mt-[20px] gap-2">
          <img className=" w-[29px] h-[29px] rounded-full" src={photo} alt="" />
          <div>
            <h3 className="text-[11px] font-bold text-white">{name}</h3>
            <h4 className="text-[8px] text-[#D5DDE8]">{job}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

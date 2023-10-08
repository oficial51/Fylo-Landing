/* eslint-disable react/prop-types */
const PromoCard = ({ icon, title, text1, text2, text3 }) => {
  return (
    <div className="flex flex-col text-center mb-[80px] items-center">
      <div className="w-[90px h-90px]">
        <img src={icon} className="w-auto h-auto" alt="icon" />
      </div>  
      <h2 className="text-white font-bold lg:text-[21px] text-[19px] mt-[36px]">{title}</h2>
      <p className="text-[#D5DDE8] lg:text-[15px] mt-[8px] text-[13px]">
        {text1} <br /> {text2} <br /> {text3}
      </p>
    </div>
  );
};

export default PromoCard;

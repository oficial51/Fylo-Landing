/* eslint-disable react/prop-types */
import PromoCard from "./cards/PromoCard";
import Content from "./cards/PromoCardContent";

const Promo = ({size}) => {
  return <section id="features" className="mt-[130px] lg:px-[300px] lg:grid lg:grid-cols-2 ">
    {Content.map((i) => <PromoCard size={size} title={i.title} text1={i.text1} text2={i.text2} text3={i.text3} icon={i.icon} key={i.index}/>
    )}
  </section>;
};

export default Promo;

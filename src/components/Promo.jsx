import PromoCard from "./cards/PromoCard";
import Content from "./cards/PromoCardContent";

const Promo = () => {
  return <section className="mt-[130px]">
    {Content.map((i) => <PromoCard title={i.title} text1={i.text1} text2={i.text2} text3={i.text3} icon={i.icon} key={i.index}/>
    )}
  </section>;
};

export default Promo;

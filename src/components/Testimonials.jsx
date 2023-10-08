import TestimonialCard from "./cards/TestimonialCard";
import CardContent from "./cards/TestimonialCardContent";
import quotes from '../assets/bg-quotes.png'

const Testimonials = () => {
  return (
    <div id="team" className="flex lg:flex-row lg:gap-[41px] flex-col lg:justify-center pb-[135px] items-center">
      <div className="relative lg:left-[93px]  lg:bottom-[120px] right-[120px]"> <img src={quotes} className="h-[20px] lg:h-[49px] " alt="quotes" /></div>
      {CardContent.map((i) => (
        <div className="z-20" key={i.index}>
          <TestimonialCard
            job={i.job}
            text4={i.text4}
            text3={i.text3}
            photo={i.photo}
            name={i.name}
            text2={i.text2}
            text1={i.text1}
          ></TestimonialCard>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;

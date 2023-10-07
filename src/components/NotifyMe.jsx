import "./Intro.css";

const NotifyMe = () => {
  return (
    <main className="relative">
      <div className="h-[355px] relative mx-auto rounded-md z-20 bg-[#21293C] w-[335px]">
        <div className="px-[29px] relative z-20 flex items-center flex-col pt-[40px]">
          <h2 className="text-white text-[18px] font-bold">
            Get early access today
          </h2>
          <p className="text-[14px] z-20 mt-[20px] text-center text-[#D5DDE8]">
            It only takes a minute to sign up and our <br /> free starter tier
            is extremely generous. If <br /> you have any questions, our support
            team <br /> would be happy to help you.
          </p>
          <form action="" className="z-20">
            <input
              className="w-[281px] z-20 mt-[32px] h-[50px] rounded-full pl-5"
              placeholder="email@example.com"
              type="text"
            />
            <button className="mt-[24px] z-20 text-[#EAFFFF] introButtonBg h-[50px] rounded-full w-[281px]">
              Get Started For Free
            </button>
          </form>
        </div>
      </div>
      <div className="w-screen absolute top-[180px] h-[500px] bg-[#0C1524]"></div>
    </main>
  );
};

export default NotifyMe;

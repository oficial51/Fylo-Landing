/* eslint-disable react/prop-types */
import "./Intro.css";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = null;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const NotifyMe = ({ size }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",
    },

    validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <main className="relative">
      <div className="h-[355px] lg:h-[275px] relative mx-auto shadow-xl rounded-md z-20 bg-[#21293C] lg:w-[865px] w-[335px]">
        <div className="px-[29px] relative z-20 flex items-center flex-col pt-[40px]">
          <h2 className="text-white lg:text-[26px] text-[18px] font-bold">
            Get early access today
          </h2>
          <div className="lg:w-[663px]">
            <p className="text-[14px] lg:text-[15px]  z-20 mt-[20px] text-center text-[#D5DDE8]">
              It only takes a minute to sign up and our
              {size.width < 1024 ? <br /> : null} free starter tier is extremely
              generous. If {size.width < 1024 ? <br /> : null} you have any
              questions, our support team {size.width < 1024 ? <br /> : null}
              would be happy to help you.
            </p>
          </div>
          <form
            onSubmit={formik.handleSubmit}
            action=""
            className="z-20 lg:flex justify-center items-center lg:gap-[30px]"
          >
            <input
              className={`w-[281px] ${
                formik.touched.email && formik.errors.email
                  ? "border border-red-400"
                  : null
              } ( lg:w-[485px] z-20 mt-[32px] lg:mt-[40px] h-[50px] rounded-full pl-5`}
              placeholder="email@example.com"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email &&
            size.width < 1024 &&
            formik.errors.email ? (
              <div className="ml-4 absolute text-[14px] self-start text-red-400">
                {formik.errors.email}
              </div>
            ) : null}
            <button className="mt-[24px] transition-all ease-in-out duration-200 hover:scale-105 lg:mt-[40px] z-20 text-[#EAFFFF] introButtonBg h-[50px] rounded-full lg:w-[200px] w-[281px]">
              Get Started For Free
            </button>
          </form>
          {formik.touched.email && size.width > 1024 && formik.errors.email ? (
            <div className="ml-16 self-start text-red-400">
              {formik.errors.email}
            </div>
          ) : null}
        </div>
      </div>
      <div className="w-screen  absolute lg:top-[140px] top-[180px] h-[500px] bg-[#0C1524]"></div>
    </main>
  );
};

export default NotifyMe;

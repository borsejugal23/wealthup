import React from "react";
import checkbox from "../Assets/checkbox.png";
import mobile from "../Assets/mobile.png";
import bottom from "../Assets/icons.png";
import vector from "../Assets/Vector 1.png"

const Wealthup = () => {
  return (
    <div className="bg-gradient-to-br from-sky-800 to-teal-600 flex flex-col h-[150vh]">
      <div className="w-full">
        <div className="mt-[84px]">
          <p className="text-white text-[76px] font-semibold text-center ">
            Check your financial health
          </p>
          <p className="text-white text-[32px] font-thin text-center not-italic">
            Use WeathoMeter to get a free report <br /> card for your finances-
            within minutes!
          </p>
        </div>

        <div className="flex justify-center mt-[31px]">
          <button className="bg-orange-500 w-64 h-16 rounded-[32px] shadow ">
            <span className="text-white text-center font-poppins text-2xl font-semibold leading-12 tracking-normal">
              Get Started
            </span>
          </button>
        </div>

        <div className="flex justify-between px-20">
          <div className="w-1/3 mt-20">
            <div className="flex items-start mb-4">
              <img src={checkbox} alt="checked" />
              <div className="px-2 w-full">
                <p className="text-white .not-italic font-semibold text-[29px] border-b-2 border-b-white w-full pb-[18px]  ">
                  Expected Retirement Age
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img src={checkbox} alt="checked" />
              <div className="px-2 w-full">
                <p className="text-white .not-italic font-semibold text-[29px] border-b-2 border-b-white w-full pb-[18px]  ">
                  Identify Mistakes
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-center overflow-hidden">
            <img src={mobile} alt="mobile-png" className="  ml-28" />
          </div>
          <div className="w-1/3 mt-20">
            <div className="flex items-start mb-4">
              <img src={checkbox} alt="checked" />
              <div className="px-2 w-full">
                <p className="text-white .not-italic font-semibold text-[29px] border-b-2 border-b-white w-full pb-[18px]  ">
                  Personalized Road Map
                </p>
              </div>
            </div>

            <div className="flex items-start mb-4">
              <img src={checkbox} alt="checked" />
              <div className="px-2 w-full">
                <p className="text-white .not-italic font-semibold text-[29px] border-b-2 border-b-white w-full pb-[18px]  ">
                  Tips To Improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full absolute -mt-[12rem]">
          <img
            src={vector}
            alt="vector"
            className="object-fill z-10"
            width={"100%"}
            height={"100%"}
          />
        </div>
        <div className="z-40 absolute w-full mt-16 ">
          <p className="text-white text-center text-[60px] font-bold">
            How it works?
          </p>
          <div className="h-32 px-56 mt-8">
            <img
              src={bottom}
              alt="bottom"
              className="h-full w-full object-cover "
            />
          </div>
          <div className="flex justify-between  px-48">
            <p className=" text-center text-[27px] font-thin text-white">
              Answer few <br />
              questions
            </p>
            <p className=" text-center text-[27px] font-thin text-white pl-14">
              Register using <br />
              phone and OTP
            </p>
            <p className=" text-center text-[27px] font-thin text-white">
              Get report and <br />
              personal roadmap
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[31px] relative z-20 -bottom-[27rem]">
          <button className="bg-orange-500 rounded-[32px] w-64 h-16  shadow px-6 py-1.5">
            <span className="text-white text-center font-poppins text-2xl font-semibold leading-12 tracking-normal">
              Get Started
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wealthup;

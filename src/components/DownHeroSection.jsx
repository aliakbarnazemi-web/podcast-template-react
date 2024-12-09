import React from "react";

function DownHeroSection() {
  return (
    <div className="container mx-auto mt-[300px] lg:px-32 px-4">
      <div className="min-h-[500px] flex items-center justify-between flex-col lg:flex-row gap-5" dir="rtl">
        <div className="parent_image w-full">
          <img
            src="images/other/image02.jpg"
            alt=""
            className="rounded-xl shadow-xl w-full"
          />
        </div>
        <div className="parent_text mt-2" dir="ltr">
          <div className="w-full sm:w-[75%]">
            <a
              href="#"
              target="_blank"
              className="font-lato font-bold text-4xl sm:text-5xl leading-[1.2]"
            >
              Best places to find design inspiration
            </a>
          </div>
          <div className="md:w-[70%] w-full h-[66px] my-8 flex gap-4 items-center">
            <button className="w-[70px] h-[70px] rounded-full flex justify-center items-center border-[1px] border-[#cecece] cursor-pointer hover:border-[#000] transition-custom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-play-fill ml-1"
                viewBox="0 0 16 16"
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
              </svg>
            </button>
            <div className="flex flex-col gap-1 justify-center mt-[-2px]">
              <p className="text-[18px] text-black font-lato font-bold">
                Episode 1
              </p>
              <div className="text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                <p>Category</p>
                <div className="w-[3px] h-[3px] rounded-full bg-[#8e8b8c]"></div>
                <p>0:13</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[73%]">
            <p className="text-[17px] font-lato text-black leading-[1.6]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <br />
            <p className="text-[17px] font-lato text-black leading-[1.6]">
              Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <a
              href="#"
              className="font-lato text-black text-[15px] font-[700] gap-3 items-center h-[fit-content] flex mt-2"
            >
              Episode page
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-right mt-[2px]"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DownHeroSection;

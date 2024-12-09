import React, { useState } from "react";

function Header() {
  // Desktop Menu
  const [desktopMenu, setDesktopMenu] = useState(false);

  const DesktopMenuToggle = () => {
    setDesktopMenu((prevState) => !prevState);
  };
  // Desktop Menu

  // Sticky Header
  const [fixHeader, setFixHeader] = useState(false);
  let scrollYValue = window.scrollY;

  window.addEventListener("scroll", () => {
    setDesktopMenu(false);

    if ((scrollYValue) => 60) {
      setFixHeader(true);
    }
    if (scrollYValue < 60) {
      setFixHeader(false);
    }
  });
  // Sticky Header

  // Mobile Menu
  const [mobileMenu, setMobileMenu] = useState(false);

  const MobileMenuToggle = () => {
    setMobileMenu((prevState) => !prevState);
  };
  // Mobile Menu

  return (
    <>
      {!fixHeader ? (
        <header>
          <header className="header w-full text-white fixed top-0 z-40">
            <div className="hidden p-[40px] lg:flex justify-between items-center">
              <a href="#">
                <img
                  src="images/Header/logo1.png"
                  alt=""
                  className="w-[131px] h-[20px]"
                />
              </a>
              <ul className="flex justify-center items-center gap-10 text-black ff-medium text-[15px]">
                <li>
                  <a href="#" className="text-black font-[700] text-[15px]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-[700] text-[15px]">
                    Pages
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-[700] text-[15px]">
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-[700] text-[15px]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black font-[700] text-[15px]">
                    Shop
                  </a>
                </li>
              </ul>
              <ul className="flex gap-5 items-center text-black ff-medium">
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <span className="cursor-pointer" onClick={DesktopMenuToggle}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="000"
                      class="bi bi-list"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </header>

          <header className="flex flex-col lg:hidden relative top-0 z-20">
            <div className="flex justify-between items-center bg-white p-4">
              <a href="#">
                <img
                  src="images/Header/logo1.png"
                  alt=""
                  className="w-[131px] h-[20px]"
                />
              </a>

              {!mobileMenu ? (
                <span className="cursor-pointer" onClick={MobileMenuToggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="000"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </svg>
                </span>
              ) : (
                <span className="cursor-pointer" onClick={MobileMenuToggle}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="000"
                    class="bi bi-x-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </svg>
                </span>
              )}
            </div>

            {!mobileMenu ? (
              <div className="w-full h-[0] bg-white absolute top-[60px] transition-custom">
                <div className="w-full h-full hidden"></div>
              </div>
            ) : (
              <div className="w-full h-[210px] bg-white absolute top-[60px] transition-custom">
                <div className="w-[95%] mx-auto h-full flex justify-center items-start flex-col gap-2">
                  <a
                    href="#"
                    className="text-black font-lato font-bold text-[18px]"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-black font-lato font-bold text-[18px]"
                  >
                    Pages
                  </a>
                  <a
                    href="#"
                    className="text-black font-lato font-bold text-[18px]"
                  >
                    Podcast
                  </a>
                  <a
                    href="#"
                    className="text-black font-lato font-bold text-[18px]"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-black font-lato font-bold text-[18px]"
                  >
                    Shop
                  </a>
                </div>
              </div>
            )}
          </header>
        </header>
      ) : (
        // Header Sticky
        <div className="w-full p-6 bg-white fixed top-0 z-40 shadow-xl hidden lg:flex justify-between items-center">
          <a href="#">
            <img
              src="images/Header/logo1.png"
              alt=""
              className="w-[131px] h-[20px]"
            />
          </a>
          <ul className="flex justify-center items-center gap-10 text-black ff-medium text-[15px]">
            <li>
              <a href="#" className="text-black font-[700] text-[15px]">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-[700] text-[15px]">
                Pages
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-[700] text-[15px]">
                Podcast
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-[700] text-[15px]">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-black font-[700] text-[15px]">
                Shop
              </a>
            </li>
          </ul>
          <ul className="flex gap-5 items-center text-black ff-medium">
            <li>
              <span className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="000"
                  class="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
        // Header Sticky
      )}

      {!desktopMenu ? (
        <div className="absolute top-0 right-[-40%] z-40 min-h-full w-[30%] transition-custom "></div>
      ) : (
        <div className="absolute top-0 right-0 z-40 min-h-full w-[20%] bg-white transition-custom p-[30px] flex flex-col gap-3">
          <div className="w-full flex justify-end">
            <span className="cursor-pointer" onClick={DesktopMenuToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="000"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </span>
          </div>

          <div className="mt-6 p-[30px]">
            <a href="#">
              <img src="images/Header/logo1.png" alt="" className="w-[171px]" />
            </a>

            <div>
              <p className="font-lato font-bold text-[18px] text-black mt-10">
                Instagram:
              </p>

              <div className="pt-6 w-full">
                <a
                  href="https://instagram.com/@aliakbarnazemi.dev"
                  target="_blank"
                  className="p-[10px] bg-blue-500 rounded-lg mt-[120px] mx-auto w-auto"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>

            <div className="mt-10">
              <p className="font-lato font-bold text-[18px] text-black mt-10">
                Contact Us:
              </p>

              <div className="mt-3">
                <li>
                  <a
                    href="https://aliakbarnazemi.ir"
                    target="_blank"
                    className=""
                  >
                    My CV
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="https://github.com/aliakbarnazemi-web"
                    target="_blank"
                    className=""
                  >
                    My Github
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;

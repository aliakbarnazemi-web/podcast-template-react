import React, { useState } from "react";

function Header() {
  // Sticky Header

  const [fixHeader, setFixHeader] = useState(false);
  let scrollYValue = window.scrollY;

  window.addEventListener("scroll", () => {
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
          
          <div className="flex justify-between items-center bg-white p-4 lg:hidden">
            <a href="#">
              <img
                src="images/Header/logo1.png"
                alt=""
                className="w-[131px] h-[20px]"
              />
            </a>
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
          </div>
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
    </>
  );
}

export default Header;

import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


function HeroSection() {
  return (
    <section className="relative">
      {/* <img src="images/Header/bg.jpg" alt="" className='2xl:h-[830px] h-[700px] object-cover w-full'/> */}
      <div className="w-full 2xl:h-[830px] h-[700px] bg-cover bg-[url('https://resonator.qodeinteractive.com/wp-content/uploads/2020/12/h1-rev-bg-img.jpg')]"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 mx-auto 2xl:h-[980px] xl:h-[880px] h-[800px] flex flex-col gap-5 md:px-24 px-6 justify-end pt-[830px]">
        <div className="hero-section-content flex flex-col gap-3 justify-center items-start container mx-auto lg:px-32">
          <h1 className='font-bold ff-bold text-4xl 2xl:text-6xl lg:w-1/2 w-[70%] leading-2'>
            New episode available now
          </h1>
          <p className='text-lg'>
            Available on Apple Soundcast and Spotify.
          </p>
          <div className="mt-12 flex gap-5">
            <a href="#">
              <img src="images/Header/h-btn-1.png" alt="" />
            </a>
            <a href="#">
              <img src="images/Header/h-btn-2.png" alt="" />
            </a>
          </div>
        </div>

        <div className="her-section-content-2 2xl:w-[75%] md:w-[100%] w-[90%] 2xl:container mx-auto mt-36 h-[291px] bg-white rounded-xl shadow-xl flex">
          <img src="images/other/image01.jpg" alt="" className='w-[253px] lg:w-[291px] rounded-img-content-2 md:block hidden' />
          <div className="content pt-[40px] px-[40px] pb-[20px] h-ful w-full">
            <div className='flex flex-col'>
              <div className="flex justify-between">
                <a href="#" className='text-3xl font-lato-bold text-black leading-[1.2] lg:w-1/2'>
                  Timmy Mike: the nature of design
                </a>
                <a href="#" className='font-lato text-black text-[15px] font-[700] gap-3 items-center h-[fit-content] hidden lg:flex'>
                  Episode page
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right mt-[2px]" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                  </svg>
                </a>
              </div>
              <div className="mt-4 mb-[30px] text-[#8e8b8c] text-[16px] flex items-center gap-2 font-[500] font-lato">
                <p>
                  Episode 1
                </p>
                <div className='w-[3px] h-[3px] rounded-full bg-[#8e8b8c]'></div>
                <p>
                  Microphone
                </p>
                <div className='w-[3px] h-[3px] rounded-full bg-[#8e8b8c]'></div>
                <p>
                  0:13
                </p>
              </div>
              <audio controls src='https://xx.sahand-music.ir/Archive/h/hayedeh/Hayedeh%20-%20Heif/08%20Khooneh%20Beh%20Khooneh.mp3' className='hero-section-audio-player mt-6'></audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
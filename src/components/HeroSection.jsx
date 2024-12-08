import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


function HeroSection() {
  return (
    <section className="relative">
      <div className="w-full h-[90.5vh] bg-[url('https://resonator.qodeinteractive.com/wp-content/uploads/2020/12/h1-rev-bg-img.jpg')]"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 container mx-auto h-[105vh] flex flex-col gap-5 px-24 pt-[220px]">
        <div className="hero-section-content flex flex-col gap-3 justify-center items-start">
          <h1 className='font-bold ff-bold text-[80px] w-1/2 leading-[1.3]'>
            New episode available now
          </h1>
          <p className='text-[20px]'>
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

        <div className="her-section-content-2 mt-36 h-[291px] bg-white rounded-xl shadow-xl flex">
          <img src="images/other/image01.jpg" alt="" className='w-[291px] rounded-img-content-2' />
          <div className="content pt-[40px] px-[40px] pb-[20px] h-ful w-full">
            <div className='flex flex-col'>
              <div className="flex justify-between">
                <a href="#" className='text-[40px] font-lato-bold text-black w-1/2 leading-[1.2]'>
                  Timmy Mike: the nature of design
                </a>
                <a href="#" className='font-lato text-black text-[15px] font-[700] flex gap-3 items-center h-[fit-content]'>
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
              <audio controls src='https://xx.sahand-music.ir/Archive/h/hayedeh/Hayedeh%20-%20Heif/08%20Khooneh%20Beh%20Khooneh.mp3' className='hero-section-audio-player'></audio>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
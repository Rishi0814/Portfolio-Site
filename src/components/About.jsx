import React from "react";
import GIF from '../assests/GIF.gif'

export default function About() {
  return (
    <div id="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ffe066]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-2 ">
          <div className="sm:text-right text-4xl font-bold">
          <img src={GIF} alt="My Gif" className="max-w-full" />
          </div>
          <div className="mt-2 md:mt-16 p-3">
            <p>Hey, I'm Rishi Barad, a Full Stack Developer on a mission to blend innovation with expertise. My journey kicked off as a Node.js intern, and now, I lead full stack development, enhancing user interfaces, and contributing valuable insights. I craft efficient solutions using ExpressJS, NodeJS, MongoDB, MySQL, and ReactJS, ensuring scalability and reliability. In the freelance realm, I've successfully delivered projects, including an EdTech platform and a robust SaaS app.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

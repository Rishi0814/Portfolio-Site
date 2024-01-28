import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div id="Home" className="w-full h-screen bg-[#0a192f]">
      {/* Container --main */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-8 flex flex-col justify-center h-full leading-5">
        <p className="text-[#ffec99] text-sm sm:text-base">Hello, my name is</p>

        <h1 className="text-2xl sm:text-5xl font-bold text-[#ccd6f6] text-left">
          Rishi Barad
        </h1>

        <p className="text-lg sm:text-2xl font-bold text-[#8893b0]">
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              500,
              "Tech Enthusiast",
              500,
              "ExpressJS, NodeJS, MongoDB",
              500,
              "MySQL, ReactJS, AWS",
              500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>

        <p className="text-[#8893b0] py-4 max-w-[800px] leading-6 text-sm sm:text-base">
          A Full Stack Developer based in Gujarat, India. With expertise in both
          SQL and NoSQL databases, I leverage frameworks like ExpressJS, NodeJS,
          MongoDB, MySQL, and ReactJS to craft efficient, scalable, and reliable
          solutions. My proficiency extends to optimizing APIs, ensuring
          application stability, and managing AWS services for scalability. I
          actively engage in project development, including a Task Scheduling
          and Background Job Management System with Node.js. It's a showcase of
          my commitment to innovation and problem-solving.
        </p>
        <div>
          <button className="text-white font-semibold border-2 px-4 sm:px-6 py-2 sm:py-3 my-2 flex items-center hover:bg-[#ffec99] hover:border-[#ffec99] hover:text-[#0a192f] text-sm sm:text-base">
            <a
              href="https://drive.google.com/file/d/1LxP7ckir7aXSFglT-ZqKOUdkkK-5h40E/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

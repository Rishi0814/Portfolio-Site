import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Connect() {
  return (
    <div id="Connect" className="bg-[#0a192f] min-h-fit">
      <div className=" max-w-[1000px] container mx-auto py-48">
        <h1 className="text-4xl font-bold text-center mb-8  text-gray-300 ">
          Connect
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 px-5">
            {/* -----box----- */}
            <div className="shadow-[#040c16] text-white bg-gray-700 p-6 rounded  hover:scale-110 duration-500">
              <FaGithub className="text-4xl text-[#ffec99] mx-auto mb-4" />
              <h2 className="text-lg font-semibold">GitHub</h2>
              <p className="text-white">Connect with me on GitHub.</p>
              <a
                href="https://github.com/Rishi0814"
                className="text-[#ffec99] font-bold mt-2 inline-block"
              >
                Visit GitHub
              </a>
            </div>

            {/* -----box----- */}
            <div className="shadow-[#040c16] text-white bg-gray-700 p-6 rounded  hover:scale-110 duration-500">
              <FaLinkedin className="text-4xl text-[#ffec99] mx-auto mb-4" />
              <h2 className="text-lg font-semibold">LinkedIn</h2>
              <p className="text-white">Connect with me on LinkedIn.</p>
              <a
                href="https://www.linkedin.com/in/rishi-barad-5069b6220/"
                className="text-[#ffec99] font-bold mt-2 inline-block"
              >
                Visit LinkedIn
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

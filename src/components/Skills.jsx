import React from "react";
import aws from '../assests/aws.png'
import mongo from '../assests/mongo.png'
import node from '../assests/node.png'
import html from "../assests/html.png";
import css from "../assests/css.png";
import js from "../assests/javascript.png";
import react from "../assests/react.png";
import github from "../assests/github.png";
import ex from '../assests/express.png'


export default function Skills() {
  const skillBadge = [ node , mongo,ex, aws,  js, react,  github ,html, css,];
  return (
    <div id="Skills" className="bg-[#0a192f] text-gray-300  py-20">
      {/* -----------CONTAINER----------- */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-pink-400">
            Skills
          </p>
          <p className="py-4">Technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-8 px-1">
          {/* --------Box element------- */}
          {skillBadge.map((skills, id) => (
            <div
              key={id}
              className=" bg-gray-700 shadow-md shadow-[#040c16] hover:scale-110 duration-500 rounded-md"
            >
              <img
                className="w-16 mx-auto my-8 "
                src={skills}
                alt={`${skills} icon`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

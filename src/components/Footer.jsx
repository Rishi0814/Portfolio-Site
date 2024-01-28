import React from "react";

export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-gray-300 py-4">
        <div className="container mx-auto flex justify-center items-center">
          <p className="text-sm">
            {" "}
            &copy; <span className="text-[#ffec99]">2023</span>{" "}
          </p>
        </div>
        <p className='"bg-gray-800 text-gray-300 flex justify-center items-center'>
          {" "}
          rishibarad007@gmail.com | Rishi Barad
        </p>
      </footer>
    </div>
  );
}

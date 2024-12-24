import React from "react";
import myImage from "../assets/image2.png";
import { socialLinks } from "../data/socialLinks";

function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto p-4 space-y-6 lg:px-8 lg:py-12">
        <div className="rounded-2xl py-8 px-6 bg-purple-100 bg-opacity-40 flex flex-col items-center text-center lg:rounded-3xl lg:p-16">
          <div className="relative mb-6 lg:mb-10">
            <a
              href="#"
              className="flex w-28 h-28 p-2 rounded-full overflow-hidden bg-purple-200 bg-opacity-40 lg:w-48 lg:h-48"
              aria-label="Profile Link"
            >
              <img
                alt="Profile of Mert Yener"
                src={myImage}
                className="w-full h-full object-cover"
              />
            </a>
          </div>
          <h1 className="font-semibold text-lg leading-6 lg:text-4xl lg:leading-tight">
            Ben, Mert Yener
          </h1>
          <p className="text-xl font-medium lg:text-3xl mt-6">
            Junior <span className="text-purple-500">Front End</span> Developer
          </p>
        </div>
        <div className="rounded-2xl py-8 px-6 bg-blue-100 bg-opacity-40 flex flex-col items-center text-center lg:rounded-3xl lg:p-16">
          <p className="text-lg font-medium lg:text-2xl text-left self-center">
            Ankara, Turkey
          </p>
          <p className="text-lg font-medium lg:text-4xl text-left self-center">
            mert@mertyener.tr
          </p>
          <div className="flex space-x-4 mt-6 lg:mt-10 self-center">
            {socialLinks.map(({ href, ariaLabel, icon }) => (
              <div
                key={href}
                className="flex flex-col items-start bg-blue-200 bg-opacity-50 rounded-full p-4"
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                  aria-label={ariaLabel}
                >
                  {icon}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

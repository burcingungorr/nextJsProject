"use client";

import { toast } from "react-hot-toast";

import { SiGithub, SiFigma } from "react-icons/si";

export const OtherStacks = () => {
  const stacks = [
    { title: "GitHub", icon: <SiGithub /> },
    { title: "Figma", icon: <SiFigma /> },
  ];

  return (
    <>
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="p-3 md:p-4 border border-borderColor bg-tertiary rounded-sm cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group"
        >
          <p
            key={stack.title}
            className="flex justify-center items-center text-gray-400 text-5xl group-hover:text-white transition-colors duration-300"
            title={stack.title}
          >
            {stack.icon}
          </p>
        </div>
      ))}
    </>
  );
};

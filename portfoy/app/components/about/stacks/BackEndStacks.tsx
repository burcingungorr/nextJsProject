"use client";

import { toast } from "react-hot-toast";
import {
  SiPhp,
  SiMysql,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiC,
  SiFirebase,
  SiApachesolr,
} from "react-icons/si";

export const BackEndStacks = () => {
  const stacks = [
    {
      title: "PHP",
      icon: <SiPhp />,
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
    },
    {
      title: "Python",
      icon: <SiPython />,
    },

    {
      title: "C",
      icon: <SiC />,
    },
    {
      title: "Firebase",
      icon: <SiFirebase />,
    },
    {
      title: "REST API",
      icon: <SiApachesolr />,
    },
  ];

  return (
    <>
      {stacks.map((stack) => (
        <div
          key={stack.title}
          className="p-3 md:p-4 border border-bordercolor bg-tertiary rounded-sm cursor-pointer transition-all duration-300 hover:border-transparent hover:shadow-lg hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 group"
        >
          <p
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

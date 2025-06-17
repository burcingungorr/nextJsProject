"use client";

import Swal from "sweetalert2";
import {
  SiReact,
  SiPython,
  SiOpenai,
  SiSharp,
  SiUnity,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoJava,
  BiLogoHtml5,
} from "react-icons/bi";

export const ProjectLists = () => {
  const projects = [
    {
      name: "Rakam Çiz – Yapay Zeka Destekli",
      description:
        "Bu proje, çocukların rakamları çizerek ve dinleyerek öğrenebileceği bir mobil uygulamadır. Uygulama, seviye seviye ilerleyen zorluklarla, çocuklara eğlenceli bir öğrenme deneyimi sunar.",
      title: "Projeyi incelemek mi istiyorsunuz? ",
      link: "https://github.com/burcingungorr/rakamtanima",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "Flutter",
          logo: <SiFlutter className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: " DentAI – Yapay Zeka Destekli",
      description:
        "Bu proje, çocukların rakamları çizerek ve dinleyerek öğrenebileceği bir mobil uygulamadır. Uygulama, seviye seviye ilerleyen zorluklarla, çocuklara eğlenceli bir öğrenme deneyimi sunar.",
      title: "Projeyi incelemek mi istiyorsunuz? ",
      link: "https://github.com/burcingungorr/dental",
      stacks: [
        {
          name: "Python",
          logo: <SiPython className="text-white w-7 h-7" />,
        },
        {
          name: "Flutter",
          logo: <SiFlutter className="text-white w-7 h-7" />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Yurttaş ",
      description:
        "Bu proje, çocukların rakamları çizerek ve dinleyerek öğrenebileceği bir mobil uygulamadır. Uygulama, seviye seviye ilerleyen zorluklarla, çocuklara eğlenceli bir öğrenme deneyimi sunar.",
      title: "Projeyi incelemek mi istiyorsunuz? ",
      link: "https://github.com/burcingungorr/yurttasMobilApp",
      stacks: [
        {
          name: "React Native",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase className="text-white w-7 h-7" />,
        },
      ],
    },
    {
      name: "Kapı Komşum ",
      description:
        "Bu proje, aynı mahalledeki kişilerin yardımlaşmasını, ortak karar almasını ve iletişim kurulabilmesini sağlar.",
      title: "Projeyi incelemek mi istiyorsunuz? ",
      link: "",
      stacks: [
        {
          name: "React Native",
          logo: <SiReact className="text-white w-7 h-7" />,
        },
        {
          name: "Firebase",
          logo: <SiFirebase className="text-white w-7 h-7" />,
        },
      ],
    },
  ];

  const github = {
    title: "Tüm projelerimi GitHub'tan incele.🚀",
    link: "https://github.com/mehmeettoprakk",
  };

  const onHandleClick = (title: string, link: string) => {
    Swal.fire({
      title: title,
      background: "#111",
      showCloseButton: true,
      showConfirmButton: false,
      icon: "info",
      html: `<a href="${link}" target="_blank" rel="noopener noreferrer" class="text-white underline text-lg">Yeni Sekmede Aç</a>`,
    });
  };

  return (
    <div className="mt-10 w-full self-center flex flex-col items-center justify-center">
      <h1 className="text-base font-medium text-primary md:text-xl text-center">
        <span className="block font-bold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Projeler
        </span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 w-full lg:w-4/5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-borderColor bg-tertiary rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105 duration-300 hover:border-transparent "
          >
            <div
              className="relative bg-black flex justify-center items-center border rounded-t-lg border-borderColor cursor-pointer group"
              onClick={() => onHandleClick(project.title, project.link)}
            >
              <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-bold bg-black bg-opacity-50 px-4 py-2 rounded-md">
                  Tıkla ve İncele 🔗
                </span>
              </div>
            </div>

            <div className="flex flex-col px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <p className="font-bold text-xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  {project.name}
                </p>
                <div className="flex gap-x-2">
                  {project.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="w-10 h-10 bg-black border border-borderColor rounded-md flex items-center justify-center hover:border-pink-500 transition-all duration-300"
                      title={stack.name}
                      aria-label={stack.name}
                    >
                      {stack.logo}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-justify text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <a
        href={github.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 text-white bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-md hover:opacity-90 transition"
      >
        {github.title}
      </a>
    </div>
  );
};

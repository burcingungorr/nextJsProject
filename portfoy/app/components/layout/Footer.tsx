"use client";

import Link from "next/link";

import { toast } from "react-hot-toast";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

interface IContact {
  label: string;
  target: string;
}

export const Footer = () => {
  const shortcuts = [
    { href: "https://github.com/burcingungorr", label: "GitHub" },
    {
      href: "https://www.linkedin.com/in/bur%C3%A7in-g%C3%BCng%C3%B6r-71718a281/",
      label: "LinkedIn",
    },
    { href: "https://www.instagram.com/burcingungor_/", label: "Instagram" },
  ];

  const stacks = [
    { name: "Next.js ", logo: <SiNextdotjs className="text-white w-8 h-8" /> },

    {
      name: "TypeScript ",
      logo: <BiLogoTypescript className="text-white w-8 h-8" />,
    },

    {
      name: "Tailwind CSS ",
      logo: <BiLogoTailwindCss className="text-white w-8 h-8" />,
    },
  ];

  const contacts = [{ label: "Email", target: "gungorburcin34@gmail.com" }];

  const onHandleCopy = (contact: IContact) => {
    navigator.clipboard.writeText(contact.target);
    toast.success(`${contact.label} panoya kopyalandı!`, {
      style: { border: "1px solid #3e3e3e", background: "#111", color: "#fff" },
    });
  };

  const cv_file_url = "/cv.pdf";

  const downloadFile = (url: string) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("İndir", fileName ?? "CV");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <footer
      id="contact"
      className="border-t border-borderColor bg-tertiary pt-10 pb-5 text-primary"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
          <div className="w-full md:w-1/3">
            <div className="flex justify-center md:justify-start items-center gap-2">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Burçin Güngör.
              </h2>
            </div>
            <hr className="w-60 my-3 mx-auto md:mx-0 p-1 bg-gradient-to-r from-purple-500 to-pink-500 border-none rounded-sm" />

            <div className="w-full md:w-1/3">
              <h3 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                iletişime Geçin
              </h3>

              {contacts.map((contact) => (
                <div
                  key={contact.target}
                  className="flex justify-center md:justify-start items-center gap-2 my-2"
                >
                  <p className="text-primary">{contact.label}:</p>
                  <button
                    className="p-2 border border-borderColor rounded-sm text-primay font-mono hover:text-white hover:border-pink-500 transition-all duration-300"
                    onClick={() => onHandleCopy(contact)}
                  >
                    {contact.target}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="mb-5 mt-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Bana Ulaşın
            </h3>

            <ul className="space-y-2">
              {shortcuts.map((shortcut) => (
                <li key={shortcut.href}>
                  <Link
                    href={shortcut.href}
                    target="_blank"
                    className="text-primary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 transition-all duration-300"
                  >
                    {shortcut.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="mb-4 text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Özgeçmiş
            </h3>

            <div
              className="mb-2 text-primary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 cursor-pointer"
              onClick={() => downloadFile(cv_file_url)}
            >
              İndir
            </div>

            <p className="mt-8 text-primary">© 2025 Burcin</p>

            <div className="flex justify-center md:justify-start gap-3 mt-4">
              {stacks.map((stack) => (
                <div
                  key={stack.name}
                  className="w-11 h-11 bg-black border border-borderColor rounded-md flex items-center justify-center hover:border-pink-500 hover:scale-105 transition-transform duration-300"
                  title={stack.name}
                >
                  {stack.logo}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

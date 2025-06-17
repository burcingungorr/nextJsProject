"use client";

import Swal from "sweetalert2";

import CustomButton from "../shared/CustomButton";

interface IContact {
  href: string;
  name: string;
}

export const Info = () => {
  const contacts = [
    {
      href: "https://github.com/burcingungorr",
      name: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/bur%C3%A7in-g%C3%BCng%C3%B6r-71718a281/",
      name: "LinkedIn",
    },
    {
      href: "https://www.instagram.com/burcingungor_/",
      name: "Instagram",
    },
  ];

  const onHandleClick = (contact: IContact) => {
    Swal.fire({
      background: "#111",
      confirmButtonColor: "#000",
      showCloseButton: true,
      confirmButtonText: ` <a href=${contact.href} target="blank"> Linke Git.`,
      icon: "info",
    });
  };

  return (
    <>
      <h1 className="text-base font-medium text-primary md:text-xl">
        Hakkımda{" "}
        <span className="block font-extrabold text-transparent text-4xl mt-1 lg:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Ben Kimim?
        </span>
      </h1>

      <hr className="w-28 my-3 p-1 bg-gradient-to-r from-purple-500  to-red-500 border-none rounded-sm" />

      <div className=" lg:max-w-lg font-light text-primary text-lg leading-relaxed">
        <p className="my-3 text-gray-300 hover:text-white transition-colors duration-300">
          Merhaba! Ben Burçin, junior yazılım geliştiricisiyim. Sürekli kendimi
          yazılım geliştirme alanında geliştiriyorum ve eğlenceli ve faydalı
          projeler yapmaya çalışıyorum. Problem çözmeyi, uygulama geliştirmeyi
          ve yeni teknolojiler öğrenmeyi seviyorum. Her zaman iş birliğine ve
          yeni fikirlere açığım.{" "}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-2 lg:max-w-lg my-4 lg:my-0">
        {contacts.map((contact) => (
          <div key={contact.href}>
            <CustomButton
              btnType="submit"
              title={contact.name}
              containerStyles="!my-1 w-full border-none bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 shadow-md hover:shadow-lg transition-transform hover:scale-105"
              textStyles="text-white font-semibold"
              onClick={() => onHandleClick(contact)}
            />
          </div>
        ))}
      </div>
    </>
  );
};

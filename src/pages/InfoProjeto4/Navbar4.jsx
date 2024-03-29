import React, { useEffect, useState } from "react";

const Navbarinfo = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeMenuItems, setActiveMenuItems] = useState([]); 
  
  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "TECS", link: "#tecs" },    
    { name: "TESTES", link: "#testes" },
    { name: "DER", link: "#der" },
    { name: "PORTFOLIO", link: "/" }, 
  ];

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const nav = document.querySelector("nav");
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
   
    const getActiveIds = () => {
      const ids = Array.from(document.querySelectorAll("section[id]")).map(
        (element) => element.id
      );
      return ids;
    };
    
    const idsOnPage = getActiveIds();
    setActiveMenuItems(idsOnPage);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase font-bold">
            Code<span className="custom-text-green">Deving</span>
          </h4>
        </div>
        <div
          className={` ${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks
              .filter((menu) => {                
                return (
                  menu.name === "PORTFOLIO" || activeMenuItems.includes(menu.link.slice(1))
                );
              })
              .map((menu, i) => (
                <li
                  key={i}
                  className={`px-6 ${
                    sticky
                      ? "hover:text-cyan-600"
                      : "text-gray-900"
                  }`}
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999]  ${
            open ? "text-gray-900" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks
              .filter((menu) => {                
                return (
                  menu.name === "PORTFOLIO" || activeMenuItems.includes(menu.link.slice(1))
                );
              })
              .map((menu, i) => (
                <li
                  onClick={() => setOpen(false)}
                  key={i}
                  className={`px-6 ${
                    sticky
                      ? "hover:text-cyan-600"
                      : "text-gray-900"
                  }`}
                >
                  <a href={menu?.link}>{menu?.name}</a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarinfo;

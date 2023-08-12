import React from "react";
import julianaImag from "../public/images/juh.png";
import setaImag from "../public/images/seta.png";
const Home = () => {
  const social_media = [

    {logo: "logo-linkedin", link: "https://www.linkedin.com/in/juliana-lima-b133b967/"},
    {logo: "logo-whatsapp", link: "https://wa.me/+5561998270529" },    
    {logo: "logo-github", link: "https://github.com/JuhLima85/"}, 
    {logo: "mail", link: "mailto:julianajls13@gmail.com" }, 
    
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={julianaImag} alt="" className="md:w-10/12 h-full object-cover" style={{ paddingTop: '30px'}}/>
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="custom-text-green md:text-6xl text-5xl">
              Olá!
              <br />
            </span>
            Meu nome é <span className="custom-text-green">Juliana Lima</span> 
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Desenvolvedora Java Fullstack
          </h4>
          <div className="mt-20">
            <div className="flex items-center justify-center md:justify-start">
              <button className="custom-download-button text-1g" style={{ marginBottom: '50px' }}>
                Entre em Contato
              </button>
              <img
                src={setaImag}
                alt=""
                className="h-full ml-4"
                style={{ height: '90px'}}
              />
            </div>
          </div>
          <div className="mt-0 text-3xl flex items-center md:justify-start justify-center gap-5">
          {social_media?.map((item) => (
              <a
                key={item.logo}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-white cursor-pointer"
              >
                <ion-icon name={item.logo}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

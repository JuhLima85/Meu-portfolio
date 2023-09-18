import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../../public/images/project1.png";
import project2 from "../../public/images/project2.jpg";
import project3 from "../../public/images/project3.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import { Link } from 'react-router-dom';

const Projetos = () => {
  const projects = [
    {
      img: project1,
      name: "Portfolio Manager",
      github_link: "https://github.com/JuhLima85/PortfolioManager",
      live_link: "https://codedeving.com.br/portfolio/pessoas/novo",
      info_link: "/info-projetos",
    },  
    
    {
      img: project2,
      name: "Ponto Online",
      github_link: "https://github.com/JuhLima85/RegistroPonto",
      live_link: "http://pontoonline.codedeving.com.br/pontoonline/",
      info_link: "/info-projeto2",
    },

    {
      img: project3,
      name: "Mundo do Harry Potter",
      github_link: "https://github.com/JuhLima85/AngularWorldHarryPotter",
      live_link: "https://worldhp.netlify.app/",
      info_link: "/info-projeto3",
    },
    
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Meus <span className="custom-text-green">Projetos</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Principais Projetos</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center justify-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerView={1.5}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl min-h-[20rem]">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <div className="text-center" >
                    <h3 className="text-xl my-4 whitespace-pre-line">{project_info.name}</h3>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
                    {project_info.github_link && (
                      <a
                        href={project_info.github_link}
                        target="_blank"
                        className="custom-text-green bg-gray-800 px-2 py-1"
                      >
                        Github
                      </a>
                    )}
                    {project_info.live_link && (
                      <a
                        href={project_info.live_link}
                        target="_blank"
                        className="custom-text-green bg-gray-800 px-2 py-1"
                      >
                        Acessar Aplicação
                      </a>
                    )}
                    {project_info.info_link && (
                      <Link
                        to={project_info.info_link}                        
                        className="custom-text-green bg-gray-800 px-2 py-1"
                      >
                        Sobre
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Projetos;
import React from "react";
import aboutImg from "../../public/videos/gifabout.gif";
import pdf from "../../public/CV Juliana - JavaFullStack.pdf";

const Sobre = () => {
  const info = [
    { text: "Anos de experiência", count: "03" },
  ];
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Sobre <span className="custom-text-green">Mim</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">Resumo</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Com 3 anos de experiência em desenvolvimento web, sou uma <span className="custom-text-green">desenvolvedora Java Full Stack, graduada em Análise e Desenvolvimento de Sistemas</span> pela UNIFAEL.
              Em <span className="custom-text-green">meu último trabalho, atuei na AR SOLUÇÕES,</span> desenvolvendo e mantendo páginas web em sistemas legados de meios de pagamento, utilizando Java 8, Maven, Wildfly, 
              Hibernate, JPA, JSF com PrimeFaces e Oracle. <span className="custom-text-green">Além disso, realizei projetos como freelancer</span>, criando sistemas web com Spring Boot e Angular para diferentes clientes, 
              como uma igreja, uma loja de salgados e uma empresa de refrigeração. Em todos os meus trabalhos, busquei entregar soluções de qualidade, seguindo as melhores práticas 
              de código e design, e atendendo as necessidades dos usuários finais.
              Estou em busca de uma oportunidade para integrar uma equipe dinâmica e colaborativa, onde possa aplicar meus conhecimentos e habilidades.             
             </p>
             <p className="text-justify leading-7 w-11/12 mx-auto">
              Vale mencionar que, pensando no futuro, estou desenvolvendo todos os meus projetos pessoais sob a marca Code Deving.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    </h3>
                    <span className="custom-text-green">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="text-center">
                <a href={pdf} download className="inline-block">
                  <button className="custom-download-button text-lg">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
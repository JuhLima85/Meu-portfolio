import React from "react";
import aboutImg from "../../public/videos/gifabout.gif";
import pdf from "../../public/Juliana Lima - Java Full Stack.pdf";

const Sobre = () => {
  const info = [
    { text: "Anos de experiência", count: "02" },
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
                Sou uma desenvolvedora Java full stack e tenho dois anos de experiência nesta área e, apesar do meu tempo ser relativamente curto no 
                mercado, já adquiri habilidades e experiência significativas. Além disso, sou estudante do curso de Análise e Desenvolvimento de Sistemas, 
                o que reforça meu compromisso em me manter atualizada. Estou animada em compartilhar meu portfólio com você, onde você encontrará projetos 
                que refletem minha experiência na linguagem e seus frameworks.                
                Vale mencionar que, pensando no futuro, estou desenvolvendo todos os meus projetos pessoais sob a marca Code Deving.
              </p>
              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3 className="md:text-4xl text-2xl font-semibold text-white">
                      {content.count}
                      <span className="custom-text-green">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
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
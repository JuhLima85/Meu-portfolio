import React from "react";
import maven from "../../public/images/icons/api.png";
import javaee from "../../public/images/icons/angular.png";  

  const SectionContent = ({ title, children }) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    const titleWithGreen = words.join(" ") + " " + `<span class="custom-text-green">${lastWord}</span>`;

    return (
      <div className="text-center mt-8">
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <h3 className="text-4xl font-semibold" dangerouslySetInnerHTML={{ __html: titleWithGreen }} />
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const InfoProjeto3 = () => {
    const icons = [
       
        {
            img: javaee,
            name: "Angular.io",
        },
        {
            img: maven,
            name: "Api",
        },       
    ]
  
    return (      
      <div>
        <section id="home" className="mt-20 text-white mb-12">
                <SectionContent title="Mundo do Harry Potter">
                    <p className="pt-8 text-gray-400 my-3 text-lg">Resumo</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        Seja bem-vindo ao mágico mundo de Harry Potter! Desenvolvi esta aplicação com o objetivo de treinar e demonstrar algumas das minhas habilidades com Angular, enfatizando a capacidade de criar componentes reutilizáveis,
                        gerenciar rotas, consumir APIs externas, como a API PotterDB, para fornecer informações detalhadas sobre os personagens de Harry Potter, e
                        criar formulários interativos para pesquisa de personagens.
                    </p>
                    <div className="flex space-x-4">
                    <div className="py-6">
                        <a href="https://worldhp.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg  ml-10">Acessar Aplicação</button>
                        </a>
                    </div>
                    <div className="py-6">
                        <a href="https://github.com/JuhLima85/AngularWorldHarryPotter" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg">Ver Código</button>
                        </a>
                    </div>     
                    </div>                      
                </SectionContent>
            </section>

            <section id="tecs" className="py-3 bg-gray-800 relative">
            <div className="flex flex-col items-center">              
                <SectionContent title="Tecnologias Utilizadas">
                    <div className="text-gray-100 text-center">
                        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
                            {icons.map((icon, i) => (
                                <div key={i} className="border-2 group border-cyan-600 relative max-w-[10rem] bg-gray-900 p-10 rounded-xl flex flex-col items-center max-h-[12rem]">
                                    <div className="w-20 h-10 flex items-center justify-center rounded-full">
                                        <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                            <img src={icon.img} alt={icon.name} className="w-15 h-15" />
                                        </div>
                                    </div>
                                    <p className="text-xl mt-10">{icon.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </SectionContent>
                </div>                
            </section>

            <section id="regras" className="py-3 text-white">
          <SectionContent title="Instruçoes de Uso">
            <div className="text-justify leading-7 w-11/12 mx-auto"><br />
            <p className="custom-text-green">1. Página Inicial</p>
            <ul>               
                <li>A aplicação começa com uma página inicial estática que não possui 
                funcionalidades específicas, mas é crucial para treinar o sistema de rotas do Angular. É o portal que te levará a outras partes do mundo 
                mágico que explorei neste projeto.</li>               
              </ul><br />
              <p className="custom-text-green">2. Escola Hogwarts</p>
              <ul>
                <li>A segunda página é dedicada à mítica Escola de Magia e Bruxaria de 
                Hogwarts. Aqui, explorei a reutilização de componentes com informações inputáveis para apresentar as quatro casas de Hogwarts: Grifinória, 
                Sonserina, Corvinal e Lufa-Lufa. Você pode experimentar o Chapéu Seletor e ver a qual casa você pertenceria!</li>
                </ul><br />
                <p className="custom-text-green">3. Personagens</p>
              <ul>
                <li>A terceira página é dedicada aos personagens do universo de Harry Potter. 
                Aqui, você tem a oportunidade de digitar o nome de um personagem e obter informações detalhadas sobre ele. Utilizei a API disponibilizada 
                em PotterDB para buscar essas informações. Após digitar o nome e pressionar "Enter" ou clicar no botão "Pesquisar", um card estilizado será 
                apresentado com detalhes sobre o personagem escolhido.</li>
                </ul>
            </div>
          </SectionContent>
        </section>

        <div className="py-3 flex flex-col items-center">          
          <div className="py-6">
            <a href="https://worldhp.netlify.app/" target="_blank" rel="noopener noreferrer">
              <button className="custom-download-button text-lg">Acessar Aplicação</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default InfoProjeto3; 
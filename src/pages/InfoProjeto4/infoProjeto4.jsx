import React from "react";
import java from "../../public/images/icons/java.png";
import hibernate from "../../public/images/icons/hibernate.png";
import springBootIcon from "../../public/images/icons/springboot.png";
import tomcat from "../../public/images/icons/tomcat.png";
import angular from "../../public/images/icons/angular.png";
import mysql from "../../public/images/icons/mysql.png";   
import maven from "../../public/images/icons/maven.png";
import docker from "../../public/images/icons/docker.png";
import teste from "../../public/images/testes4.png";
import der from "../../public/images/der3.png";

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

  const InfoProjeto4 = () => {
    const icons = [
       
        {
            img: angular,
            name: "Angular",
        },
        {
          img: java,
          name: "Java 11",
        },
        {
          img: hibernate,
          name: "Hibernate",
        },
        {
          img: springBootIcon,
          name: "Spring Boot",
        },       
        {
          img: maven,
          name: "Maven",
        }, 
        {
        img: tomcat,
        name: "Apache Tomcat",
        },
        {
            img: mysql,
            name: "Mysql",
        },
        {
          img: docker,
          name: "Docker",
        },       
        
    ]
  
    return (      
      <div>
        <section id="home" className="mt-20 text-white mb-12">
                <SectionContent title="Marido de Aluguel">
                    <p className="pt-8 text-gray-400 my-3 text-lg">Resumo</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    Esta aplicação é dedicada ao controle e cadastro de clientes e serviços prestados. Ela integra o backend por meio de uma API desenvolvida com o framework Spring Boot, enquanto o frontend é construído em Angular.
                    </p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    A aplicação Angular integra recursos essenciais, como um sistema de login para autenticação de usuários, proteção de rotas utilizando o AuthGuard, e um Interceptor HTTP para garantir 
                    a inclusão adequada do token de autenticação em todas as requisições.
                    </p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                    A API Spring Boot segue o padrão MVC (Model-View-Controller) e implementa um sistema de segurança. Esse sistema utiliza tokens JWT (JSON Web Token) para proteger os endpoints, assegurando autenticação e autorização. 
                    Além disso, são implementados testes de integração para garantir a confiabilidade e o correto funcionamento de todas as funcionalidades.
                    </p>
                    <div className="flex space-x-4">
                    <div className="py-6">
                        <a href="https://maridodealuguel.netlify.app/login" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg  ml-10">Acessar Aplicação</button>
                        </a>
                    </div>
                    <div className="py-6">
                        <a href="https://github.com/JuhLima85/Marido-de-Aluguel" target="_blank" rel="noopener noreferrer">
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

            <section id="testes" className="py-3 bg-gray-800 relative">
            <div className="flex flex-col items-center"> 
          <SectionContent title="Testes Unitários">
            <div className="text-justify leading-7 w-11/12 mx-auto"><br />  
            <p className="text-gray-400 my-3 text-lg flex justify-center">Testes de integração utilizando JUnit 5, Mockito e o banco de dados H2.</p>          
            <div className="h-full relative flex justify-center items-center">              
                <img
                  src={teste}
                  alt="Testes"
                  className="max-w-3xl max-h-3xl w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </div>
          </SectionContent>
          </div>
        </section>

          <div className="flex flex-col items-center">
          <section id="der" className="text-white">
            <SectionContent title="DER">
              <p className="text-gray-400 my-3 text-lg">Diagrama de Entidade-Relacionamento</p>
              <div className="h-full relative flex justify-center items-center">
                <img
                  src={der}
                  alt="DER"
                  className="max-w-3xl max-h-3xl w-full object-cover bg-cyan-600 rounded-xl"
                />
              </div>
            </SectionContent>
          </section>
        </div>

        <div className="py-3 flex flex-col items-center">          
          <div className="py-6">
            <a href="https://maridodealuguel.netlify.app/login" target="_blank" rel="noopener noreferrer">
              <button className="custom-download-button text-lg">Acessar Aplicação</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default InfoProjeto4; 
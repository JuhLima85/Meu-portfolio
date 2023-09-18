import React from "react";
import jpa from "../../public/images/icons/jpa.png";
import tomcat from "../../public/images/icons/tomcat.png";
import mysql from "../../public/images/icons/mysql.png";
import maven from "../../public/images/icons/maven.png";
import hibernate from "../../public/images/icons/hibernate.png";
import jsp from "../../public/images/icons/jsp.png";
import javaee from "../../public/images/icons/javaee.png";
import der from "../../public/images/der2.png";


  

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

  const InfoProjeto2 = () => {
    const icons = [
       
        {
            img: javaee,
            name: "JavaEE",
        },
        {
            img: maven,
            name: "Maven",
        },
        {
            img: jpa,
            name: "JPA",
        },
        {
            img: hibernate,
            name: "Hibernate",
        },
        {
            img: jsp,
            name: "JSP",
        },
        {
            img: tomcat,
            name: "Tomcat",
        },        
        {
            img: mysql,
            name: "MySql",
        }
    ]
  
    return (      
      <div>
        <section id="home" className="mt-20 text-white mb-12">
                <SectionContent title="Ponto Online">
                    <p className="pt-8 text-gray-400 my-3 text-lg">Resumo</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        "Ponto Online" é um sistema cujo objetivo principal é oferecer um meio eficiente para o controle de ponto de 
                        funcionários de uma empresa. Através desta aplicação, é possível realizar diversas operações, como cadastro, gerenciamento de 
                        horários, marcação de ponto, listagem e controle de horas extras e atrasos. O sistema também incorpora validações de senha e CPF 
                        para garantir a integridade dos dados.
                    </p>

                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        A arquitetura do sistema é baseada em Servlets e JSP, onde o código está estruturado em camadas, incluindo o acesso a dados por 
                        meio de classes DAO (Data Access Object) e a interação com o usuário através de Servlets e JSPs.
                    </p>
                    <div className="flex space-x-4">
                    <div className="py-6">
                        <a href="https://pontoonline.codedeving.com.br/pontoonline/" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg  ml-10">Acessar Aplicação</button>
                        </a>
                    </div>
                    <div className="py-6">
                        <a href="https://github.com/JuhLima85/Ponto-Online" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg">Ver Código</button>
                        </a>
                    </div>     
                    </div>  
                </SectionContent>
            </section>

            <section id="tecs" className="py-10 bg-gray-800 relative">
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
            </section>

            <section id="regras" className="text-white">
          <SectionContent title="Instruçoes de Uso">
            <div className="text-justify leading-7 w-11/12 mx-auto"><br />
            <p className="custom-text-green">Recursos Humanos</p>
            <ul>               
                <li><span className="text-gray-400">Cadastro de Funcionário:</span> Insira a senha "123", vá na sessão 
                Cadastrar Funcionário, use o menu lateral para ajudar na navegação. Caso esteja acessando por smartphone, use o menu no canto
                superior à direita. Cadastre o cpf, a senha e os horários de trabalho do funcionário. </li>
                <li><span className="text-gray-400">Acessando horários cadastrados:</span> Liste todos os horários cadastrados ou pesquise por um
                cpf específico. Utilize os botões editar e excluir para gerenciar os dados cadastrados.</li>
                <li><span className="text-gray-400">Acessando marcações feitas:</span> Faça uma pesquisa dos registros de ponto realizados por um
                determinado funcionário especificando um período.</li>
              </ul><br />
              <p className="custom-text-green">Funcionários</p>
              <ul>
                <li><span className="text-gray-400">Marcação de ponto:</span> Insira o cpf e a senha cadastrados para realizar a marcação do ponto.
                Insira também um cpf e uma senha errada para testar as funcionalidades de validação de senha e cpf.</li>
                </ul>
            </div>
          </SectionContent>
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
          <div className="py-6">
            <a href="http://pontoonline.codedeving.com.br/pontoonline/" target="_blank" rel="noopener noreferrer">
              <button className="custom-download-button text-lg">Acessar Aplicação</button>
            </a>
          </div>
        </div>
      </div>
    );
  };

  export default InfoProjeto2; 
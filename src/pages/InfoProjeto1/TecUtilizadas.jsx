import React from "react";
import jpa from "../../public/images/icons/jpa.png";
import springBootIcon from "../../public/images/icons/springboot.png";
import mysql from "../../public/images/icons/mysql.png";
import maven from "../../public/images/icons/maven.png";
import hibernate from "../../public/images/icons/hibernate.png";
import jsp from "../../public/images/icons/jsp.png";
import bootstrap from "../../public/images/icons/bootstrap.png";

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

const TecUtilizadas = () => {
    const icons = [
        {
            img: springBootIcon,
            name: "Spring Boot",
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
            img: bootstrap,
            name: "Bootstrap",
        },
        {
            img: mysql,
            name: "MySql",
        }
    ]

    return (
        <div>
            <section id="home" className="mt-20 text-white mb-12">
                <SectionContent title="Portfolio Manager">
                    <p className="pt-8 text-gray-400 my-3 text-lg">Resumo</p>
                    <p className="text-justify leading-7 w-11/12 mx-auto">
                        Esse projeto foi um desafio técnico aplicado para Dev. Full-stack Sênior que eu escolhi fazer para treinar minhas habilidades.
                        O Portfolio Manager é um sistema para gerenciar os dados do portfólio de projetos de uma empresa. O objetivo é proporcionar uma
                        plataforma onde seja possível realizar o cadastro, exclusão, alteração e consulta de projetos de forma intuitiva e eficiente.
                        Uma das principais funcionalidades do sistema é a classificação automática de risco dos projetos. Os projetos podem ser classificados
                        em baixo risco, médio risco e alto risco. Essa classificação é determinada automaticamente com base nas informações de status e datas disponíveis.
                        Dessa forma, o sistema auxilia na identificação e gestão dos projetos de acordo com seu nível de risco.
                        Existem alguns estados possíveis dos projetos. Caso um projeto tenha seu status alterado para iniciado, em andamento ou encerrado, ele não
                        poderá mais ser excluído, garantindo assim a integridade dos dados e o histórico completo dos projetos.
                        Outro aspecto importante é a associação de membros aos projetos. O sistema não permite o cadastro direto de novos membros. Em vez disso, é
                        fornecida uma funcionalidade via web service onde é possível atrelar um funcionário previamente cadastrado ao cargo de gerente de projeto.
                        Essa abordagem centralizada facilita a gestão dos membros e a atribuição correta aos projetos. Para interagir e testar a aplicação da melhor
                        forma, dê uma olhada nas regras de negócio e nas validações.
                    </p>
                    <div className="flex space-x-4">
                    <div className="py-6">
                        <a href="https://codedeving.com.br/portfolio/pessoas/novo" target="_blank" rel="noopener noreferrer">
                            <button className="custom-download-button text-lg  ml-10">Acessar Aplicação</button>
                        </a>
                    </div>
                    <div className="py-6">
                        <a href="https://github.com/JuhLima85/PortfolioManager" target="_blank" rel="noopener noreferrer">
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
        </div>
    );
};

export default TecUtilizadas;
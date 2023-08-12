
import React from "react";
import javaee from "../public/images/icons/javaee.png";
import jdbc from "../public/images/icons/jdbc.png";
import jpa from "../public/images/icons/jpa.png";
import springBootIcon from "../public/images/icons/springboot.png";
import mysql from "../public/images/icons/mysql.png";
import postgre from "../public/images/icons/postgre.png";
import oracle from "../public/images/icons/oracle.png";
import jsp from "../public/images/icons/jsp.png";
import primefaces from "../public/images/icons/primefaces.png";
import jsf from "../public/images/icons/jsf.png";
import angular from "../public/images/icons/angular.png";
import react from "../public/images/icons/react.png";
import docker from "../public/images/icons/docker.png";
import scrum from "../public/images/icons/scrum.png";

const Habilidades = () => {
  const icons = [
    {
      img: javaee,
      name: "JavaEE",
    },

    {
      img: springBootIcon,
      name: "Spring Boot",
    },

    {
      img: jdbc,
      name: "JDBC",
    },
    {
      img: jpa,
      name: "JPA",
    },

    {
      img: mysql,
      name: "MySQL",
    }
    ,

    {
      img: postgre,
      name: "PostgreSQL",
    }
    ,

    {
      img: oracle,
      name: "Oracle",
    }
    ,

    {
      img: jsp,
      name: "JSP",
    }
    ,

    {
      img: primefaces,
      name: "PrimeFaces",
    }
    ,

    {
      img: jsf,
      name: "JSF",
    }
    ,

    {
      img: angular,
      name: "Angular",
    }
    ,

    {
      img: react,
      name: "React",
    }
    ,

    {
      img: docker,
      name: "Docker",
    }
    ,

    {
      img: scrum,
      name: "Scrum",
    }
  ];
  
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          Minhas <span className="custom-text-green">Habilidades</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Meu conhecimento</p>
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
    </section>
  );
};

export default Habilidades;
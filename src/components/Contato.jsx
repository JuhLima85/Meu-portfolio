import React from "react";
import gif2 from "../public/videos/giflove.gif";

const Contato = () => { 
  const contact_info = [
    
    {logo: "logo-whatsapp",  link: "https://wa.me/+5561998270529" },    
    {logo: "logo-github", link: "https://github.com/JuhLima85/"},
    {logo: "logo-linkedin", link: "https://www.linkedin.com/in/juliana-lima-b133b967/"},
    {logo: "mail", link: "mailto:julianajls13@gmail.com" },
    {
      logo: "location",
      link: "https://www.google.com.br/maps/place/Bras%C3%ADlia,+DF/@-15.7215814,-48.0199305,12z/data=!3m1!4b1!4m6!3m5!1s0x935a3d18df9ae275:0x738470e469754a24!8m2!3d-15.7975154!4d-47.8918874!16zL20vMDFoeV8?entry=ttu"
    },
   
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Entre em <span className="custom-text-green">contato</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Será um prazer !</p>

        <div className="mt-16 flex flex-wrap flex-col
         gap-6 max-w-3xl bg-gray-800 md:p-6 p-2 rounded-lg justify-center mx-auto"> 
          <div className="flex flex-col gap-7 items-center justify-center">
              <div className="flex gap-4 flex-wrap items-center justify-center">
            {contact_info?.map((contact) => (              
                <div className="min-w-[3rem] text-3xl flex items-center justify-center text-white rounded-full">
                <a
                  key={contact.logo}
                   href={contact.link}
                   className="md:text-base text-sm break-words"
                   target="_blank" 
                   rel="noopener noreferrer"                   
                   style={{ fontSize: "2.5rem" }}
                  >
                    <div className="custom-balloon-icons">
                    <ion-icon name={contact.logo} className="custom-icon"
                        style={{ fontSize: "2.5rem" }}></ion-icon>
                    </div>
                  </a>                                   
                </div>                                              
            ))}           
            <div>
              <img src={gif2} alt="Animação GIF" width="300" height="auto" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contato;
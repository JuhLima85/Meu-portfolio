const Botao = () => { 
  return (
    <a href="https://wa.me/+5561998270529" target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer bg-green-400 w-16 h-16 flex items-center justify-center rounded-full animate-bounce">
        <div className="custom-balloon">
          <ion-icon name="logo-whatsapp" className="custom-icon" style={{ fontSize: '2rem' }}></ion-icon>
        </div>
      </div>
    </a>
  );
};
 
export default Botao;

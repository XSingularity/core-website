    import React from "react";
    import { TypeAnimation } from 'react-type-animation';
    import { useState } from "react";

    const TituloDesplegable = ({ titulo, contenido }: { titulo: string, contenido: string }) => {
        const [abierto, setAbierto] = useState(false);
      
        const toggleDesplegar = () => {
          setAbierto(!abierto);
        };
      
        return (
          <div>
            <h1 className="text-xl font-normal text-gray-700 " onClick={toggleDesplegar}> 
              {titulo} <span className=" cursor-pointer hover:text-gray-400">{abierto ? '▲' : '▼'}</span>
            </h1>
            {abierto && <p>{contenido}</p>}
          </div>
        );
      };

    const Modal = ({ isVisible, onClose } : {isVisible : boolean , onClose:() => void } ) => {
        if (!isVisible) return null;

        const handleClose = (e: React.MouseEvent<HTMLDivElement>) => { // Esto es para que cuando le de click al modal (cuadro blanco) no se cierre, pero cuando le de click al fondo negro blurred, si.
            const target = e.target as HTMLDivElement;
            if (target.id === 'wrapper') onClose();
        }

    return (
        <div className='fixed inset-0 z-10 bg-black bg-opacity-25 backdrop-blur-sm flex 
        justify-center items-center' 
        id="wrapper" 
        onClick={handleClose}
        //Cuando le de click al fondo negro blurred se va a cerrar el modal!
        >
            <div className='flex flex-col '>
            <button className="text-white text-xl place-self-end" onClick={() => onClose()}>X</button>
            
            <div className=" bg-white drop-shadow-lg rounded-lg p-20 z-100 xl:w-[900px] md:w-[900px] sm:w-[500px] " >
            <TypeAnimation 
            sequence={[
       
            "FAQ's", // Para editar el pointer ve a hoja de estilos global.css y edita "type"
            1000
            ]}
      wrapper="span"
      speed={30}
      className={'type justify-center items-center text-2xl flex mb-10 text-sans font-semibold'}
      cursor={false}
      repeat={Infinity}
    />
                
      <div className="grid gap-5 ">
      <TituloDesplegable titulo="What technologies and programming languages do you utilize in your work?" 
      contenido="We specialize in languages like Python, Javascript, Go, Solidity and technologies such as React, Docker, Node JS, AWS. However, if there's any other language that you want to work with, we can totally assist you with that." />
      <TituloDesplegable titulo="What is the minimum budget and the project size you are willing to work with?" contenido="Our minimum budget to work with is $10.000. But you can contact us and we can make an exception if you need." />
      <TituloDesplegable titulo="Will you sign an NDA?" contenido="Yes, sure. If you want to sign an NDA, we are always ready to do so." />
     

    </div>
            </div>
            </div>
        </div>
    );
    };
    export default Modal;

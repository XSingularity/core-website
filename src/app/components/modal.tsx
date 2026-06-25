"use client";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";
import { ArrowUp } from './svg/ArrowUp'
import { ArrowDown } from './svg/ArrowDown'

const TituloDesplegable = ({ titulo, contenido }: { titulo: string, contenido: string }) => {
  const [abierto, setAbierto] = useState(false);

  const toggleDesplegar = () => {
    setAbierto(!abierto);
  };

  return (
    <div>
      <h2 className=" sm:text-lg md:text-xl lg:text-xl xl:text-xl font-bold text-gray-700 " onClick={toggleDesplegar}>
        {titulo}<span className=" cursor-pointer hover:text-gray-400 absolute">{abierto ? <ArrowUp/> : <ArrowDown/> }</span>
      </h2>
      {abierto && <p>{contenido}</p>}
    </div>
  );
};

const Modal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
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
        <button className="text-white text-xl sm:place-self-center md:place-self-center lg:place-self-end xl:place-self-end" onClick={() => onClose()}>X</button>

        <div className=" bg-gray-100 drop-shadow-lg rounded-lg px-20 py-10 z-100 sm:w-[31.25rem] md:w-[56.25rem] lg:w-[56.25rem] xl:w-[56.25rem]   " >
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

          <div className="grid gap-8 sm:text-sm md:text-lg lg:text-lg xl:text-lg">
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

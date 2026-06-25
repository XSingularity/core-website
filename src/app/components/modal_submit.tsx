"use client";
import React from "react";
import confetti from "canvas-confetti"


const Modal_submit = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  if (!isVisible) return null;
  confetti()
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
        <div className=" bg-gray-100 drop-shadow-lg rounded-lg px-10 z-100 sm:w-[21.25rem] md:w-[40.25rem] lg:w-[46.25rem] xl:w-[46.25rem] py-10" >
          <p className=" sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold  text-center flex justify-center">Thanks for your message.</p>
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-xl text-center justify-center py-2 mb-2">We will get back to you soon! 👩‍💻</p>
          <div className="justify-center flex"><button onClick={() => onClose()} className=" ease-in duration-200 hover:scale-[1.1] text-white bg-blue-500 border-1 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded sm:text-sm md:text-lg lg:text-lg xl:text-lg font-medium ">
            Close</button></div>
        </div>
      </div>
    </div>
  );
};
export default Modal_submit;

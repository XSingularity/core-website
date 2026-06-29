"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";


const Modal_submit = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  // Lazy-load confetti only when the success modal actually opens.
  useEffect(() => {
    if (!isVisible) return;
    let cancelled = false;
    import("canvas-confetti").then((mod) => {
      if (!cancelled) mod.default();
    });
    return () => { cancelled = true; };
  }, [isVisible]);

  if (!isVisible || typeof document === 'undefined') return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => { // Esto es para que cuando le de click al modal (cuadro blanco) no se cierre, pero cuando le de click al fondo negro blurred, si.
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') onClose();
  }

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex
        justify-center items-center p-4'
      id="wrapper"
      onClick={handleClose}
    //Cuando le de click al fondo negro blurred se va a cerrar el modal!
    >
      <div className='flex flex-col '>
        <div className=" bg-gray-100 drop-shadow-lg rounded-lg px-10 z-100 sm:w-[21.25rem] md:w-[40.25rem] lg:w-[46.25rem] xl:w-[46.25rem] py-10" >
          <p className=" sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-bold  text-center flex justify-center">Thanks for your message.</p>
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-xl text-center justify-center py-2 mb-2 text-gray-600">We'll get back to you within one business day.</p>
          <div className="justify-center flex"><button onClick={() => onClose()} className="transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-white bg-[#2795ff] py-2.5 px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff] hover:bg-[#1c7fe8] rounded-full sm:text-sm md:text-lg lg:text-lg xl:text-lg font-semibold ">
            Close</button></div>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default Modal_submit;

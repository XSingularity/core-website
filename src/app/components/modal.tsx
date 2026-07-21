"use client";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TypeAnimation } from 'react-type-animation';
import { ArrowUp } from './svg/ArrowUp'
import { ArrowDown } from './svg/ArrowDown'
import { useDict } from '../i18n/LocaleProvider'

const TituloDesplegable = ({ titulo, contenido }: { titulo: string, contenido: string }) => {
  const [abierto, setAbierto] = useState(false);
  const panelId = React.useId();

  return (
    <div className="border-b border-gray-200 pb-3 last:border-b-0">
      <h3>
        {/* A real button: keyboard-focusable, toggleable with Enter/Space, and
            announced with its expanded state. The previous <h2 onClick> was
            unreachable without a mouse. */}
        <button
          type="button"
          onClick={() => setAbierto((v) => !v)}
          aria-expanded={abierto}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 py-2 text-left text-base md:text-lg font-bold text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2795ff] rounded"
        >
          <span>{titulo}</span>
          <span className="shrink-0 text-gray-400">{abierto ? <ArrowUp /> : <ArrowDown />}</span>
        </button>
      </h3>
      {abierto && (
        <p id={panelId} className="pt-1 pb-2 text-sm md:text-base text-gray-600">
          {contenido}
        </p>
      )}
    </div>
  );
};

const Modal = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  const dict = useDict();

  // Escape closes, and the page behind stops scrolling while the modal is open.
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [isVisible, onClose]);

  if (!isVisible || typeof document === 'undefined') return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => { // Esto es para que cuando le de click al modal (cuadro blanco) no se cierre, pero cuando le de click al fondo negro blurred, si.
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') onClose();
  }

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex
        justify-center items-center p-4'
      id="wrapper"
      role="dialog"
      aria-modal="true"
      aria-label={dict.faq.title}
      onClick={handleClose}
    //Cuando le de click al fondo negro blurred se va a cerrar el modal!
    >
      <div className='flex w-full max-w-[56.25rem] flex-col'>
        <button
          aria-label={dict.contact.close}
          className="self-end mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white text-xl hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          onClick={() => onClose()}
        >
          X
        </button>

        {/* Fluid width with a max — the old fixed sm:w-[31.25rem] (500px) forced
            horizontal overflow on any phone narrower than that. */}
        <div className="max-h-[80vh] w-full overflow-y-auto bg-gray-100 drop-shadow-lg rounded-lg px-6 sm:px-10 md:px-16 py-8 md:py-10">
          <TypeAnimation
            key={dict.faq.title}
            sequence={[
              dict.faq.title, // Para editar el pointer ve a hoja de estilos global.css y edita "type"
              1000
            ]}
            wrapper="span"
            speed={30}
            className={'type justify-center items-center text-2xl flex mb-10 text-sans font-semibold'}
            cursor={false}
            repeat={Infinity}
          />

          <div className="grid gap-8 sm:text-sm md:text-lg lg:text-lg xl:text-lg">
            {dict.faq.items.map((item) => (
              <TituloDesplegable key={item.q} titulo={item.q} contenido={item.a} />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default Modal;

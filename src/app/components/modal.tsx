"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
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
          className="flex w-full items-center justify-between gap-4 py-2 text-left text-base md:text-lg font-bold text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-text rounded"
        >
          <span>{titulo}</span>
          <span className="shrink-0 text-gray-600">{abierto ? <ArrowUp /> : <ArrowDown />}</span>
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
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes, the page behind stops scrolling, focus moves in and is
  // trapped while open, and returns to whatever opened the modal on close.
  // Without the trap, Tab walks invisibly through the page behind the overlay.
  useEffect(() => {
    if (!isVisible) return;
    const opener = document.activeElement as HTMLElement | null;
    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    focusables()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panelRef.current?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      opener?.focus?.();
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
      <div ref={panelRef} className='flex w-full max-w-[56.25rem] flex-col'>
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
          <h2 className="mb-10 flex items-center justify-center text-2xl font-semibold text-gray-900">
            {dict.faq.title}
          </h2>

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

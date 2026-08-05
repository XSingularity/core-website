"use client";
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useDict, useLocale } from "../i18n/LocaleProvider";
import { WHATSAPP_NUMBER, whatsappHref } from "./whatsapp-link";

const Modal_submit = ({ isVisible, onClose }: { isVisible: boolean, onClose: () => void }) => {
  const t = useDict().contact;
  const { locale } = useLocale();
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = React.useId();

  // Confetti only speaks to people who can see it. Without a dialog role, a
  // label and focus moving in, a screen-reader user submitted the form and was
  // told nothing at all.
  useEffect(() => {
    if (!isVisible) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);

    let cancelled = false;
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      import("canvas-confetti").then((mod) => {
        if (!cancelled) mod.default();
      });
    }

    return () => {
      cancelled = true;
      document.removeEventListener('keydown', onKey);
      opener?.focus?.();
    };
  }, [isVisible, onClose]);

  if (!isVisible || typeof document === 'undefined') return null;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'wrapper') onClose();
  }

  return createPortal(
    <div className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex
        justify-center items-center p-4'
      id="wrapper"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={handleClose}
    >
      <div className='flex w-full max-w-[46.25rem] flex-col'>
        <div className="w-full bg-gray-100 drop-shadow-lg rounded-lg px-6 sm:px-10 py-8 sm:py-10">
          <p id={titleId} className="text-xl md:text-2xl lg:text-3xl font-bold text-center flex justify-center text-gray-900">{t.successTitle}</p>
          <p className="text-sm md:text-lg lg:text-xl text-center justify-center py-2 mb-4 text-gray-600">{t.successBody}</p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              ref={closeRef}
              onClick={() => onClose()}
              className="transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] text-white bg-brand-text py-2.5 px-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text hover:bg-brand-hover rounded-full text-base md:text-lg font-semibold"
            >
              {t.close}
            </button>
            {WHATSAPP_NUMBER && (
              <a
                href={whatsappHref(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-[#128C7E] px-8 py-2.5 text-base md:text-lg font-semibold text-[#0f6f64] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#128C7E]/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#128C7E]"
              >
                {t.whatsappCta}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
export default Modal_submit;

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center font-sans text-gray-900">
      <div className="pointer-events-none absolute inset-0 dots-dark opacity-70" />
      <div className="relative flex flex-col items-center">
        <Image
          src="/logo1.webp"
          alt="XSingularity"
          width={1174}
          height={273}
          className="w-40 mb-10"
          priority
        />
        <p className="text-sm font-semibold tracking-[0.25em] text-brand-text mb-3">
          error 404
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          This page took a wrong turn
        </h1>
        <p className="max-w-md text-gray-600 mb-8">
          The page you're looking for doesn't exist or has moved. Let's get you
          back to something that does.
        </p>
        <Link
          href="/"
          className="inline-flex items-center text-white bg-brand-text hover:bg-brand-hover transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text py-3 px-8 rounded-full text-lg font-semibold shadow-lg shadow-brand-text/30"
        >
          Back to home
        </Link>

        {/* Bilingual on purpose: a static export emits exactly one 404 document
            for every unmatched path, so a mistyped URL under /es/ lands here
            too. Shipping only English dropped Spanish visitors out of their
            language at the worst possible moment. */}
        <div className="mt-12 w-full max-w-md border-t border-gray-200 pt-8" lang="es">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight mb-3">
            Esta página se perdió por el camino
          </h2>
          <p className="text-gray-600 mb-6">
            La página que buscas no existe o cambió de sitio.
          </p>
          <Link
            href="/es/"
            className="inline-flex items-center rounded-full border border-brand-text px-6 py-2.5 text-base font-semibold text-brand-text transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand/10 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-text"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

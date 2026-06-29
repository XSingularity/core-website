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
        <p className="text-sm font-semibold tracking-[0.25em] text-[#2795ff] mb-3">
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
          className="inline-flex items-center text-white bg-[#2795ff] hover:bg-[#1c7fe8] transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#2795ff] py-3 px-8 rounded-full text-lg font-semibold shadow-lg shadow-[#2795ff]/30"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}

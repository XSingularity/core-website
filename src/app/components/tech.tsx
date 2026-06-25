import React from 'react'
import Image from 'next/image'

const LOGOS = [
  { src: "/python.webp", alt: "Python backend programming language" },
  { src: "/react.webp", alt: "React frontend programming framework" },
  { src: "/docker.webp", alt: "Docker backend Container Application Development" },
  { src: "/kubernetes.webp", alt: "Kubernetes container orchestration" },
  { src: "/aws.webp", alt: "AWS Cloud Computing Service" },
  { src: "/gcp.webp", alt: "Google Cloud Computing Service" },
  { src: "/solidity.webp", alt: "Solidity blockchain development" },
  { src: "/nextjs.webp", alt: "NextJS frontend framework" },
  { src: "/javascript.webp", alt: "Javascript programming language" },
  { src: "/django.webp", alt: "Django Python framework" },
  { src: "/fastAPI.webp", alt: "FastAPI Python framework" },
];

const Logo = ({ src, alt }: { src: string; alt: string }) => (
  <div className="flex shrink-0 items-center justify-center w-24 md:w-32 px-4">
    <Image className="w-16 md:w-20 h-auto" src={src} alt={alt} width={500} height={500} loading="lazy" />
  </div>
);

const Tech = () => {
  return (
    <section className="py-6 md:py-8">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden px-4
        before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-24 before:bg-gradient-to-r before:from-white before:to-transparent before:content-['']
        after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-24 after:bg-gradient-to-l after:from-white after:to-transparent after:content-['']">
        {/* track: two identical halves, animated by exactly -50% => seamless infinite loop */}
        <div className="flex w-max animate-marquee">
          {LOGOS.map((logo, i) => (
            <Logo key={`a-${i}`} {...logo} />
          ))}
          {LOGOS.map((logo, i) => (
            <Logo key={`b-${i}`} {...logo} aria-hidden />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tech;

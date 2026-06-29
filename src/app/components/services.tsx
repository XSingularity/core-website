import React from 'react';
import Image from 'next/image'

type Service = {
  title: string;
  text: string;
  img: string;
  alt: string;
  span: string;
};

const SERVICES: Service[] = [
  {
    title: "Project management",
    text: "Our meticulous dedication to every detail ensures that your project is executed accurately to transform your ideas into tangible results.",
    img: "/project_m.webp",
    alt: "project management for software development",
    span: "lg:col-span-3",
  },
  {
    title: "UX/UI design",
    text: "We conduct the necessary research, covering every important detail to create an interface that responds to your users' real needs.",
    img: "/ux.webp",
    alt: "UI UX design software development",
    span: "lg:col-span-3",
  },
  {
    title: "Technical support",
    text: "Our highly skilled team is always ready to provide assistance, ensuring continuous and uninterrupted operation of your software.",
    img: "/tech_s.webp",
    alt: "technical support software development",
    span: "lg:col-span-2",
  },
  {
    title: "Frontend design",
    text: "We transform concepts into attractive, functional interfaces that connect with your audience from the very first click.",
    img: "/frontend.webp",
    alt: "frontend design programming software development",
    span: "lg:col-span-2",
  },
  {
    title: "Backend development",
    text: "We empower your applications with secure, robust and scalable development, so your software runs smoothly and scales with your business.",
    img: "/backend.webp",
    alt: "backend programming software development",
    span: "lg:col-span-2",
  },
];

const Services = () => {
  return (
    <div className="relative overflow-hidden py-14 md:py-24 text-white font-sans bg-gradient-to-br from-[#2795ff] via-[#2086f0] to-[#1668c9]">
      <div className="pointer-events-none absolute inset-0 grid-light opacity-60" />
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-300/20 blur-3xl" />
      <div className="relative xl:container m-auto px-6 sm:px-10 md:px-12 lg:px-6">
        <div className="flex flex-col text-center w-full mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] text-blue-100/80 mb-3">what we do</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Services</h2>
          <p className="lg:w-2/3 mx-auto text-blue-50/90">End-to-end software services — from product management and UX/UI to frontend, backend and ongoing support — engineered to make your product a success.</p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className={`group flex flex-col p-6 sm:p-8 rounded-3xl bg-white shadow-2xl shadow-blue-900/30 transition duration-300 hover:-translate-y-1.5 hover:shadow-blue-900/40 ${service.span}`}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  className="h-56 lg:h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  src={service.img}
                  alt={service.alt}
                  width={1080}
                  height={720}
                  loading="lazy"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-4 text-gray-600 text-left">
                  {service.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

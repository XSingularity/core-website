import React from 'react'

const LOGOS = [
  (<div className="w-40 sm:w-20"><img src="/python.png" alt="Python" /></div>),
  (<div className="w-40 sm:w-20"><img src="/react.png" alt="React" /></div>),
  (<div className="w-40 sm:w-20"><img src="/docker.png" alt="Docker" /></div>),
  (<div className="w-40 sm:w-20"><img src="/kubernetes.png" alt="Kubernetes" /></div>),
  (<div className="w-40 sm:w-20"><img src="/aws.png" alt="AWS" /></div>),
  (<div className="w-40 sm:w-20"><img src="/gcp.png" alt="Google Cloud" /></div>),
  (<div className="w-40 sm:w-20"><img src="/solidity.png" alt="Solidity" /></div>),
  (<div className="w-40 sm:w-20"><img src="/nextjs.png" alt="NextJS" /></div>),
  (<div className="w-40 sm:w-20"><img src="/javascript.png" alt="Javascript" /></div>),
  (<div className="w-40 sm:w-20"><img src="/django.png" alt="Django" /></div>),
  (<div className="w-40 sm:w-20"><img src="/fastAPI.png" alt="FastAPI" /></div>),
];

const slideFlexClassName = "slide flex sm:px-3 md:px-0 lg:px-0 xl:px-0 sm:w-[6rem] md:w-[7.813rem]  lg:w-[7.813rem]  xl:w-[7.813rem]  items-center justify-center";
const LogosSlide = LOGOS.map((logo, index) => (
  <div
    className={slideFlexClassName}
    key={index}
  >
    {logo}
  </div>
))

const Tech = () => {
  return (
    <div> 
      <div className="relative py-12 m-auto sm:my-2 md:my-8 lg:my-4 xl:my-4 sm:w-[20rem] md:w-[37.5rem] lg:w-[56.25rem] xl:w-[56.25rem] 2xl:w-[75rem] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[6.25rem] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[6.25rem] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] after:content-['']">
        <div className="animate-infinite-slider flex sm:w-[calc(15.625rem*22)] md:w-[calc(15.625rem*22)] lg:w-[calc(15.625rem*22)] xl:w-[calc(15.625rem*22)] ">
          {LogosSlide}
          {LogosSlide}
          {LogosSlide}
          {LogosSlide}
        </div>
      </div>
    </div>

  )
}

export default Tech
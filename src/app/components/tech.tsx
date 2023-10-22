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
  (<div className="w-40 sm:w-20"><img src="/fastapi.png" alt="FastAPI" /></div>),
];

const slideFlexClassName = "slide flex w-[125px] items-center justify-center";
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
    <div className=" relative py-8 m-auto my-10 xl:w-[900px] lg:w-[900px] 2xl:w-[1200px] sm:w-[400px] overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*11)]">
        {LogosSlide}
        {LogosSlide}
  
      </div>
      
    </div>
    </div>
    
  )
}

export default Tech
import React from 'react'

const LOGOS = [
 (<div className="w-40 sm:w-20"><img src="/python.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/react.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/docker.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/kubernetes.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/aws.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/gcp.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/solidity.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/nextjs.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/javascript.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/django.png" alt="" /></div>),
 (<div className="w-40 sm:w-20"><img src="/fastapi.png" alt="" /></div>),

  ];


const Tech = () => {
  return (
    <div className="relative m-auto xl:w-[900px] lg:w-[900px] 2xl:w-[900px] sm:w-[400px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="animate-infinite-slider flex w-[calc(250px*10)]">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
      <br />
    </div>
    
  )
}

export default Tech
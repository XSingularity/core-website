import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Timeline = () => {
  const [tooltips, setTooltips] = useState([
    "Texto 1",
    "Texto 2",
    "Texto 3",
    "Texto 4",
    "Texto 5",
  ]);

  const handleMouseEnter = (index: number) => {
    // Aquí puedes agregar la lógica para mostrar 
  };

  const handleMouseLeave = () => {
    // Aquí puedes agregar la lógica para ocultar 
  };
  return (

    <div className="min-h-seditcreen h-[700px] bg-gradient-to-r from-blue-500 to-blue-700 py-20 justify-center sm:py-12 font-sans">
     <div className=" text-center w-full mb-40 mt-10 text-white">
          <h1 className="text-3xl font-bold mb-4 ">SERVICES</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We offer a comprehensive range of services, from project management to design and development, to ensure the success of your projects and applications.</p>
        </div> 
  <div className="w-[900px] items-center justify-center mx-auto">
  <div className="relative">
      <div className="h-2 bg-white w-full absolute top-1/2 transform -translate-y-1/2"></div>
      <div className="flex justify-between">
        {tooltips.map((text, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-[90px] h-[90px] bg-white rounded-full"></div>
            {tooltips[index] && (
              <div className="hidden absolute -top-8 -left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow">
                {tooltips[index]}
                {/* Agrega el icono aquí */}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
  );
} 
export default Timeline
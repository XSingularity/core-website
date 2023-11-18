import React, { useState, useEffect } from "react";
import handleViewport, { type InjectedViewportProps } from 'react-in-viewport';
import { TablerCheckupList } from './svg/TableReqs';
import { TablerTerminal2 } from './svg/Terminal';
import { FontistoLaboratory } from './svg/Testing';
import { TablerRocket } from './svg/Rocket';
import { Support } from './svg/Support';
import { debounce } from 'lodash';

const TitleComponent = ({ title }:{title:string} ) => (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-center w-[200px] -mt-12">
    {title}
  </div>
);

const Block = (props: InjectedViewportProps<HTMLDivElement>) => {
  const { forwardedRef } = props;
  return (
    <div className="viewport-block" ref={forwardedRef}></div>
  );
};

const ViewportBlock = handleViewport(Block, { rootMargin: '-1.0px' });

const Workflow = (props: InjectedViewportProps<HTMLDivElement>) => {
  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize(window.innerWidth);
    }, 300);

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

<<<<<<< HEAD
  // Define una función para renderizar el div en función del tamaño de la ventana
  const renderDivBasedOnWindowSize = () => {
    if (windowSize < 1024) {
      // Para tamaños pequeños.....
      return <div className="">
        <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-700 py-40 justify-center sm:py-12 font-sans drop-shadow-xl">
          <div className="text-center w-full sm:mb-30 md:mb-30 lg:mb-40 xl:mb-40 mt-10 text-white ">
            <h1 className="text-3xl font-bold mb-4">WORKFLOW</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We offer a comprehensive range of services, from project management to
              design and development, to ensure the success of your projects and
              applications.
            </p>
          </div>
          <div className=" items-center  justify-center mx-auto drop-shadow-lg ">
            <div className="relative">
              <div className="w-2 h-full bg-white absolute top-1/2 transform -translate-y-1/2 opacity-0  "></div>
              {/* ESTOY QUITANDO LA LINEA */}
              {/* LINEA */}
              <div className="flex-column justify-between ">
                {tooltips.map((text, index) => (
                  <div
                    key={index}
                    className="relative transition duration-1000 items-center text-center top-5 cursor-pointer "
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {activeTooltip === index && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow w-[300px] h-[116px] z-10 flex items-center justify-center  ">
                        {tooltips[index]}
                      </div>
                    )}
                    {/* INFO */}
                    <div className="w-[90px] h-[90px] bg-white rounded-full cursor-pointer left-[50%] transform mx-auto my-20"></div>
                    <ViewportBlock onEnterViewport={() => setActiveTooltip(index)} onLeaveViewport={() => setActiveTooltip(null)} />
                    {/* CIRCULO */}

                    <div className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] cursor-pointer">
                      {icons[index]}
                    </div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-center -mt-10">
                      {titles[index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div></div>;
    } else {
      // Para tamaños grandes.........
      return <div className="">
      
      <div className="h-[700px] bg-gradient-to-r from-blue-500 to-blue-700 py-40 justify-center sm:py-12 font-sans drop-shadow-xl">
        <div className="text-center w-full mb-40 mt-10 text-white">
          <h1 className="text-3xl font-bold mb-4">WORKFLOW</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            We offer a comprehensive range of services, from project management to
            design and development, to ensure the success of your projects and
            applications.
          </p>
          </div>
            <div className="w-[900px] items-center justify-center mx-auto drop-shadow-lg">
              <div className="relative">
                <div className="h-2 bg-white w-full absolute top-1/2 transform -translate-y-1/2"></div>
                <div className="flex justify-between">
                  {tooltips.map((text, index) => (
                    <div
                      key={index}
                      className="relative hover:scale-[1.1] transition duration-1000"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[90px] h-[90px] bg-white rounded-full cursor-pointer"></div>
                      {activeTooltip === index && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow text-center mt-10 w-[200px]">
                          {text}
                        </div>
                      )}
                      <div className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] cursor-pointer">
                        {icons[index]}
                        <TitleComponent title={titles[index]} /> 
                      </div>
                     
                    </div>
                  
                ))}
                
              </div>
            </div>
          </div>
        </div></div>;
    }
  };

  const [tooltips, setTooltips] = useState([
=======
  const tooltipsData = [
>>>>>>> 6a5cf24dc4268d0cb96dab2fcad90856d160efaf
    "This is where we analyze the requirements of your project, ensuring that we fully understand your needs and goals.",
    "Our experts transform the requirements into solid and efficient code, using industry best practices.",
    "The code undergoes unit testing and quality controls to ensure that your software operates flawlessly.",
    "We set up all your infrastructure, server configuration and installation.",
    "We provide ongoing support to ensure your business can operate smoothly.",
  ];

  const [tooltips, setTooltips] = useState<string[]>(tooltipsData);
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);

  const icons = [
    <TablerCheckupList />,
    <TablerTerminal2 />,
    <FontistoLaboratory />,
    <TablerRocket />,
    <Support />
  ];

  const titles = [
    "PLANNING",
    "CODE IMPLEMENTATION",
    "TESTING & QA",
    "DEPLOYMENT",
    "SUPPORT"
  ];

  const handleMouseEnter = (index: number) => {
    setActiveTooltip(index);
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  const renderDivBasedOnWindowSize = () => {
    if (windowSize < 1024) {
      return (
        <div className="">
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-blue-700 py-40 justify-center sm:py-12 font-sans drop-shadow-xl">
            <div className="text-center w-full sm:mb-30 md:mb-30 lg:mb-40 xl:mb-40 mt-10 text-white ">
              <h1 className="text-3xl font-bold mb-4">WORKFLOW</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We offer a comprehensive range of services, from project management to
                design and development, to ensure the success of your projects and
                applications.
              </p>
            </div>
            <div className=" items-center  justify-center mx-auto drop-shadow-lg ">
              <div className="relative">
                <div className="w-2 h-full bg-white absolute top-1/2 transform -translate-y-1/2 opacity-0  "></div>
                {/* ESTOY QUITANDO LA LINEA */}
                {/* LINEA */}
                <div className="flex-column justify-between ">
                  {tooltips.map((text, index) => (
                    <div
                      key={index}
                      className="relative transition duration-1000 items-center text-center top-5 cursor-pointer "
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      {activeTooltip === index && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow w-[300px] h-[116px] z-10 flex items-center justify-center  ">
                          {tooltips[index]}
                        </div>
                      )}
                      {/* INFO */}
                      <div className="w-[90px] h-[90px] bg-white rounded-full cursor-pointer left-[50%] transform mx-auto my-20"></div>
                      <ViewportBlock onEnterViewport={() => setActiveTooltip(index)} onLeaveViewport={() => setActiveTooltip(null)} />
                      {/* CIRCULO */}

                      <div className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] cursor-pointer">
                        {icons[index]}
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-center -mt-10">
                        {titles[index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div></div>
      );
    } else {
      return (
        <div className="">
          <div className="h-[700px] bg-gradient-to-r from-blue-500 to-blue-700 py-40 justify-center sm:py-12 font-sans drop-shadow-xl">
            <div className="text-center w-full mb-40 mt-10 text-white">
              <h1 className="text-3xl font-bold mb-4">WORKFLOW</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                We offer a comprehensive range of services, from project management to
                design and development, to ensure the success of your projects and
                applications.
              </p>
            </div>
            <div className="w-[900px] items-center justify-center mx-auto drop-shadow-lg">
              <div className="relative">
                <div className="h-2 bg-white w-full absolute top-1/2 transform -translate-y-1/2"></div>
                <div className="flex justify-between">
                  {tooltips.map((text, index) => (
                    <div
                      key={index}
                      className="relative hover:scale-[1.1] transition duration-1000"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="w-[90px] h-[90px] bg-white rounded-full cursor-pointer"></div>
                      {activeTooltip === index && (
                        <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow text-center mt-10 w-[200px]">
                          {text}
                        </div>
                      )}
                      <div className="absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%] cursor-pointer">
                        {icons[index]}
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white font-bold text-center w-[200px] -mt-12">
                        {titles[index]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      {renderDivBasedOnWindowSize()}
    </div>
  );
};

export default handleViewport(Workflow);
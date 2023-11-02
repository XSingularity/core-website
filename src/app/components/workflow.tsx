import React, { useState } from "react";
import { TablerCheckupList } from './svg/TableReqs'
import { TablerTerminal2 } from './svg/Terminal'
import { FontistoLaboratory } from './svg/Testing'
import { TablerRocket } from './svg/Rocket'
import { Support } from './svg/Support'

const Workflow = () => {
  const [tooltips, setTooltips] = useState([
    "This is where we analyze the requirements of your project, ensuring that we fully understand your needs and goals.",
    "Our experts transform the requirements into solid and efficient code, using industry best practices.",
    "The code undergoes unit testing and quality controls to ensure that your software operates flawlessly.",
    "We setup all your infrastructure, server configuration and installation.",
    "We provide ongoing support to ensure your business can operate smoothly.",
  ]);

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null);


  const handleMouseEnter = (index: number) => {
    if (typeof index === 'number') {
      setActiveTooltip(index);
    }
  };

  const handleMouseLeave = () => {
    setActiveTooltip(null);
  };

  return (
    <div className="min-h-screen h-[700px] bg-gradient-to-r from-blue-500 to-blue-700 py-20 justify-center sm:py-12 font-sans  ">
      <div className="text-center w-full mb-40 mt-10 text-white">
        <h1 className="text-3xl font-bold mb-4">WORKFLOW</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          We offer a comprehensive range of services, from project management to
          design and development, to ensure the success of your projects and
          applications.
        </p>
      </div>
      <div className="w-[900px] items-center justify-center mx-auto drop-shadow-lg ">
        <div className="relative ">
          <div className="h-2 bg-white w-full absolute top-1/2 transform -translate-y-1/2  "></div>
          <div className="flex justify-between ">
            {tooltips.map((text, index) => (
              <div
                key={index}
                className="relative "
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[90px] h-[90px] bg-white rounded-full cursor-pointer hover:scale-[1.5] transition duration-1000"></div>
                {activeTooltip === index && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded-lg shadow text-center mt-5 ">
                    <div className="w-[200px] ">

                      {tooltips[index]} </div>

                    <TablerCheckupList />
                    <TablerTerminal2 />
                    <FontistoLaboratory />
                    <TablerRocket />
                    <Support />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
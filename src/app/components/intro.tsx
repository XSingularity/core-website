import SvgBlackhole from './svg/Blackhole'
import SvgDust from './svg/Dust'
import {Link} from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';



const Intro = () => {
  const menuItems =
  [
    {
      id: 1,
      title: "Home"
    } ]
  return (
  
    <section className="text-gray-600 font-sans  ">
      <div className=" container flex flex-wrap p-7 mx-auto xl:px-40 2xl:px-40 lg:px-7 md:px-7 sm:p-0  flex-col md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 my-28 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          
          <div>

 
     <TypeAnimation 
      sequence={[
       
        'We Create & Optimize', // Para editar el pointer ve a hoja de estilos global.css y edita "type"
        1000
      ]}
      wrapper="span"
      speed={30}
      className={'type title-font sm:text-4xl lg:text-5xl md:text-4xl text-3xl font-semibold'}
      cursor={false}
      repeat={Infinity}
    />

          </div>
          
          <div>
            <ul className="pl-1 pt-6 text-md market-text-lg list-disc text-gray-900">
              {/* edit puntos, tamano letra etc*/}
              <nav className="flex text-base font-sans text-gray-600 flex-col sm:items-start sm:text-left text-center items-center -mb-5 space-y-2.5">
                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3 " viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5 "></path>
                    </svg>
                  </span>Committed to creating scalable and innovative solutions to take your projects to the next level.
                </a>

                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Empowering businesses through cutting-edge technology and tailored strategies.
                </a>
                <a>
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Boosting digital presence and performance to drive your success.
                </a>

              </nav>
            </ul>
          </div>

          <div className="flex justify-center py-12 ">
       
            <button className="ease-in duration-200 hover:scale-[1.1] inline-flex text-white bg-blue-500 border-1 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded text-lg font-medium ">
              Talk with us</button>
          </div>
        </div>
      
        <div className="sm:content-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
         <SvgDust className='absolute rotate-180 w-[1015px] sm:opacity-0 lg:opacity-100 right-0 top-0 -z-10'/>
         <SvgBlackhole/>
        </div>
      </div>
    </section>
  )
}
export default Intro
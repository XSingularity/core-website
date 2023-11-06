import SvgBlackhole from './svg/Blackhole'
import SvgDust from './svg/Dust'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';



const Intro = () => {
  const menuItems =
    [
      {
        id: 1,
        title: "Home"
      }]
  return (

    <section className="text-gray-600 font-sans sm:py-0 md:py-0 lg:py-0 xl:py-0">
      <div className=" container flex flex-wrap flex-col p-1 mx-auto md:px-7 xl:px-40 2xl:px-40 md:flex-row items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 sm:my-10 md:my-20 lg:my-20 xl:my-20 md:pr-16 flex flex-col 
        md:items-start md:text-left sm:mb-10 md:mb-0 lg:mb-0 xl:mb-0 items-center text-center">

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

          <div className='sm:my-0 md:my-0 lg:my-2 xl:my-10 '>
           
            <ul className=" pt-6 text-md market-text-lg list-disc text-gray-900">
              {/* edit puntos, tamano letra etc*/}
              <nav className="flex text-base font-sans text-gray-600 flex-col sm:items-start sm:text-left text-center items-center">
                <a className="text-justify mb-4">
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center ">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3 " viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5 "></path>
                    </svg>
                  </span>We specialize in crafting high-quality, innovative solutions that bring your projects to life with precision and creativity.</a>
                <a className="text-justify mb-4">
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Empowering businesses through our strategies and visionary approach.
                </a>
                <a className="text-justify mb-4">
                  <span className="bg-indigo-100 text-blue-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="w-3 h-3" viewBox="0 0 24 24">
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>Partner with us to drive high-quality results and achieve lasting success in your business endeavors.
                </a>
              </nav>
            </ul>
          </div>

          <div className="flex justify-center ">

            <a target="_blank" href="https://calendly.com/xsingularity/meet-us"> <button className="ease-in duration-200 hover:scale-[1.1] inline-flex text-white bg-blue-500 border-1 py-2 px-6 focus:outline-none hover:bg-gray-900 hover:text-white rounded text-lg font-medium sm:mb-10 md:mb-10 lg:mb-10 xl:mb-10">
              Meet us</button></a>
          </div>
        </div>

        <div className="sm:content-center w-1/2 sm:w-1/2 md:w-1/2 lg:w-1/2">
          <SvgDust className='absolute rotate-180 w-[1015px] right-0 top-0 -z-10' />
          <SvgBlackhole className="" />
        </div>
      </div>
    </section>
  )
}
export default Intro
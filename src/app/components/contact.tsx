import React, { useState } from 'react';
import axios from 'axios';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios.post('/api/contact', formData).then((response: any) => {
      if (response.status === 200) {
        console.log('Response succeeded!')
        alert("Thank you for your message. We will get back to you soon!")
      }
    });
  };

  return (
    <div className="font-sans">
      <section className="text-gray-700 font-sans relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <img src="/c1.png" className='absolute -z-10 top-20 right-40 blur-sm w-[80px] animate-bounce-slow4 sm:hidden md:block lg:block xl:block' alt="" />  {/* 4 */}
            <img src="/c1.png" className='absolute -z-10 bottom-3 right-20 rotate-45 w-[100px] animate-bounce-slow5 ' alt="" />  {/*  5 */}
            <img src="/c3.png" className='absolute -z-10 sm:top-[45%] md:top-1/2 lg:top-1/2 xl:top-1/2 sm:left-6 md:left-20 lg:left-20 xl:left-20 sm:blur-sm md:blur-none lg:blur-none xl:blur-none rotate-45 w-[100px] animate-bounce-slow1 ' alt="" />  {/*  1 */}
            <img src="/c3.png" className='absolute -z-10 top-1 blur-sm left-1/2 rotate-45 w-[70px] animate-bounce-slow3 ' alt="" />  {/*  3 */}
            <img src="/c3.png" className='absolute -z-10 blur-sm left-80 rotate-180 w-[90px] animate-bounce-slow2 sm:top-20 md:top-30 lg:top-30 xl:top-30 ' alt="" /> {/*   2  */}
            <h1 className="text-3xl font-bold mb-4 py-10 text-center text-gray-900">TELL US ABOUT YOU</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              <strong>Get in touch with us.</strong> Fill out the form below to reach our team. Whether you have questions, feedback, or interest in our solutions, we're here to assist you. We look forward to working with you.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto ">
            <form className="flex flex-wrap -m-2" onSubmit={handleSubmit}>
              <div className="p-2 w-1/2 ">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-100 rounded border border-gray-300 focus-border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="ease-in duration-500 mx-auto flex text-white bg-gray-900 border-1 py-2 px-6 focus:outline-none hover:bg-blue-500 hover:text-white rounded text-lg font-medium text-center"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
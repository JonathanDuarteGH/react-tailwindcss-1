import React from 'react';
import Carousel from './subAbout/Carousel';
import { theAgents } from './subAbout/Constants'

const About = () => {
  return (
    <div id="about">
      <div id="team" className="my-10">
        <div className="container mx-auto">
          <div className="...">
            <div className="text-center">
              <h1 className="text-4xl font-semi-bold mt-6 mb-3">Meet Our Team</h1>
              <p className="text-md font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. </p>
              <hr className="border-b-2 border-red-700 my-10 inline-block" style={{ width: 100 }}></hr>
            </div>
          </div>
        </div>
      </div>

      <div className='hidden lg:block'>
        <Carousel>
          {theAgents.map((item, index) => (
            <div className="carousel__track-container-1 md:items-center md:justify-center md:h-full md:flex md:relative md:w-full" key={index}>
              {item.content.map((c, i) => (
                <div className="md:flex border border-gray-400 border-opacity-50 md:mx-4 justify-center self-center items-center" key={i}>
                  <div className="lg:flex lg:flex-center items-center justify-center lg:mr-6">
                    <img src={c.image} className="sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-full xl:h-full object-scale-down" alt="agents"></img>
                  </div>
                  <div className="fig-caption mx-auto text-center">
                    <h3 className="font-serif md:text-lg md:mt-2 lg:text-xl lg:mt-0 lg:mr-4 xl:text-2xl">{c.name}</h3>
                    <p className="font-mono md:text-base lg:mr-4">{c.role}</p>
                    <p className="font-sans md:text-base lg:mr-4">Follow Me:</p>
                    <div className="mr-1 md:my-2 md:ml-2 lg:mt-4 lg:ml-0">
                      <button className="bg-gray-800 text-gray-400 shadow-lg font-normal md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-facebook"></i>
                      </button>
                      <button className="bg-blue-500 text-white shadow-lg font-normal md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-twitter"></i>
                      </button>
                      <button className="bg-red-500 text-white shadow-lg font-normal md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-instagram"></i>
                      </button>
                      <button className="bg-gray-800 text-gray-400 shadow-lg font-normal md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="carousel_dots lg:w-auto lg:my-4 lg:text-center lg:relative">
        <button className="dot active bg-black rounded-full h-2 w-2 cursor-pointer mr-3 hidden lg:inline-block"></button>
        <button className="dot bg-gray-500 rounded-full h-2 w-2 cursor-pointer ml-3 hidden lg:inline-block"></button>
      </div>

      <div className='lg:hidden'>
        {theAgents.map((item, index) => (
          <div className="carousel__track-small-container-1" key={index}>
            {item.content.map((c, i) => (
              <div className="carousel__small_track1 carousel-small_slide1 container inset-0 px-3 mx-auto flex-auto self-center justify-center p-3" key={i}>
                <div className="border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center flex">
                  <div className="items-center justify-center">
                    <img src={c.image} className="object-scale-down" alt="agent1"></img>
                  </div>
                  <div className="fig-caption mx-auto text-center mt-2">
                    <h3 className="font-serif text-xl my-1">{c.name}</h3>
                    <p className="font-mono text-xl my-1">{c.role}</p>
                    <p className="font-sans text-xl my-1">Follow me:</p>
                    <div className="my-3">
                      <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-8 h-8 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-facebook"></i>
                      </button>
                      <button className="bg-blue-500 text-white shadow-lg font-normal w-8 h-8 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-twitter"></i>
                      </button>
                      <button className="bg-red-500 text-white shadow-lg font-normal w-8 h-8 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-instagram"></i>
                      </button>
                      <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-8 h-8 items-center align-center outline-none focus:outline-none mr-2" type="button">
                        <i className="fa fa-linkedin"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
};

export default About;

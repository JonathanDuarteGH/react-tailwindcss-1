import React from 'react';

import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import FooterBottom from '../components/FooterBottom.js';

export default function FullWeb() {
  return (
    <>
      <NavBar />
      <main>
        <div className="bg-white bg-center bg-fixed bg-no-repeat bg-cover h-screen relative">
          <header>
            <div className="flex items-center justify-center">
              <div className="h-screen w-screen bg-center bg-no-repeat bg-cover relative object-cover object-fit overflow-hidden"
                style={{
                  backgroundImage: "url('https://bucket4origin.s3.us-east-2.amazonaws.com/bannerbg.jpg')"
                }}>
                <section className="px-4 py-8 md:px-8 md:py-12 lg:px-16 xl:pb-24 xl:px-24 xxl:px-40">
                  <div className="container mx-auto lg:flex mt-48">
                    <div className="flex flex-col px-6 py-12 mt-4 md:w-1/2 md:leading-loose md:items-start lg:self-center bg-transparent">
                      <h1 className="text-white text-5xl font-bold m-0 md:leading-normal">Welcome To
                        <br />Some <br />Company
                      </h1>
                      <p className="text-white font-light md:leading-loose md:text-2xl text-xl mt-6">React & Tailwindcss Website.</p>
                      <a href="/#" className="btn btn-banner text-white md:text-lg px-6 mt-12 mr-auto inline-block border border-white rounded hover:bg-red-600">Learn More <i className="text-white fa fa-send"> </i></a>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </header>

          <div id="service" className="py-10">
            <div className="container px-3 mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-semi-bold mt-6 mb-3">Our Service</h1>
                <p className="text-md font-normal mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. </p>
                <hr className="border-b-2 border-red-700 my-10 inline-block" style={{ width: 100 }}></hr>
              </div>
            </div>
            <div className="container px-3 mx-auto inline md:flex">
              <div className="flex md:w-1/3 px-4">
                <div id="icon-start" className="border border-gray-300 rounded-full h-20 w-20 flex flex-center items-center justify-center p-6 mr-6">
                  <i className="fa fa-picture-o text-red-700 text-3xl"></i>
                </div>
                <div className="...">
                  <h3 className="text-lg mb-6">Design</h3>
                  <p className="text-base mb-16"> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                </div>
              </div>
              <div className="flex md:w-1/3 px-4">
                <div id="icon-start" className="border border-gray-300 rounded-full h-20 w-20 flex flex-center items-center justify-center p-6 mr-6">
                  <i className="fa fa fa-code text-red-700 text-3xl"></i>
                </div>
                <div className="...">
                  <h3 className="text-lg mb-6">Development</h3>
                  <p className="text-base mb-16"> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                </div>
              </div>
              <div className="flex md:w-1/3 px-4">
                <div id="icon-start" className="border border-gray-300 rounded-full h-20 w-20 flex flex-center items-center justify-center p-6 mr-6">
                  <i className="fa fa-diamond text-red-700 text-3xl"></i>
                </div>
                <div className="...">
                  <h3 className="text-lg mb-6">Marketing</h3>
                  <p className="text-base mb-16"> doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                </div>
              </div>
            </div>
          </div>

          <div id="portfolio" className="py-20">
            <div className="container px-4 mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-semi-bold mt-6 mb-3">Our Previous Works</h1>
                <p className="text-md font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. </p>
                <hr className="border-b-2 border-red-700 my-10 inline-block" style={{ width: 100 }}></hr>
              </div>
            </div>
            <div className="container px-4 mx-auto">
              <div className="w-full">
                <ul id="portfolio-filters" className="mb-12 list-none flex justify-center flex-wrap">
                  <li data-filter=".filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active">
                    <button href="#All" className="btn btn-banner text-black uppercase bg-gray-200 text-md text-center flex mx-4 mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:bg-red-600 transition ease-in-out duration-300">All
                    </button>
                  </li>
                  <li data-filter=".filter-app">
                    <button href="#App" className="btn btn-banner text-black uppercase bg-gray-200 text-md mx-4 text-center flex mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:bg-red-600 transition ease-in-out duration-300">App
                  </button>
                  </li>
                  <li data-filter=".filter-card">
                    <button href="#Card" className="btn btn-banner text-black uppercase bg-gray-200 text-md mx-4 text-center flex mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:bg-red-600 transition ease-in-out duration-300">Card
                  </button>
                  </li>
                  <li data-filter=".filter-logo">
                    <button href="#Logo" className="btn btn-banner text-black uppercase bg-gray-200 text-md mx-4 text-center flex mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:bg-red-600 transition ease-in-out duration-300">Logo
                  </button>
                  </li>
                  <li data-filter=".filter-web">
                    <button href="#Web" className="btn btn-banner text-black uppercase bg-gray-200 text-md mx-4 text-center flex mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:bg-red-600 transition ease-in-out duration-300">Web
                  </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container px-4 mx-auto">
              <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/app1.jpg" alt="app1" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/app2.jpg" alt="app2" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/app3.jpg" alt="app3" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/card1.jpg" alt="card1" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/card2.jpg" alt="card2" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/card3.jpg" alt="card3" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/logo1.jpg" alt="logo1" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/logo2.jpg" alt="logo2" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/logo3.jpg" alt="logo4" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/web1.jpg" alt="web1" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/web2.jpg" alt="web2" /></div>
                <div className=""><img src="https://bucket4origin.s3.us-east-2.amazonaws.com/web3.jpg" alt="web3" /></div>
              </div>

            </div>
          </div>

          <div id="about1" className="my-10">
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

          <div id="about2" className="carousel">

            <div className="md:relative carousel__track">

              <div className="carousel__track-container1 carousel_slide hidden md:block">
                <div className="carousel__track1 container md:inset-0 px-3 mx-auto inline md:flex md:self-center md:justify-center lg:flex p-3">
                  <button className="carousel__button carousel__button--left cursor-pointer sm:inset-y-0 my-auto invisible">
                    <i className="fa fa-arrow-left text-red-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl sm:w-1/4 border border-gray-300 rounded-full md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 flex flex-center items-center justify-center hover:bg-red-600 hover:text-white transition ease-in-out duration-300"></i>
                  </button>
                  <div className="md:w-1/4 lg:flex lg:w-1/2 border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="lg:flex lg:flex-center items-center justify-center lg:mr-6">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent1.jpg" className="sm:w-56 sm:h-56 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-full xl:h-full object-scale-down" alt="agent1"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif md:text-lg md:mt-2 lg:text-xl lg:mt-0 lg:mr-4 xl:text-2xl">Haris Brown</h3>
                      <p className="font-mono md:text-base lg:mr-4">Sr. UI Designer</p>
                      <p className="font-sans md:text-base lg:mr-4">Follow me:</p>
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
                  <div className="lg:flex md:w-1/4 lg:w-1/2 border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="lg:flex lg:flex-center items-center justify-center lg:mr-6">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent2.jpg" className="md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-full xl:h-full object-scale-down" alt="agent2"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif md:text-lg md:mt-2 lg:text-xl lg:mt-0 lg:mr-4 xl:text-2xl">Emma Brown</h3>
                      <p className="font-mono md:text-base lg:mr-4">Sr. UI Designer</p>
                      <p className="font-sans md:text-base lg:mr-4">Follow me:</p>
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
                  <button className="carousel__button carousel__button--right cursor-pointer md:top-0 md:right-0 md:bottom-0 my-auto invisible">
                    <i className="fa fa-arrow-right text-red-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl border border-gray-300 rounded-full md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 flex flex-center items-center justify-center hover:bg-red-600 hover:text-white transition ease-in-out duration-300"></i>
                  </button>
                </div>
              </div>

              <div className="carousel__track-container2 carousel_slide hidden md:block">
                <div className="carousel__track2 carousel-slide2 container px-3 mx-auto inline md:flex md:self-center md:justify-center lg:flex p-3">
                  <button className="carousel__button carousel__button--left cursor-pointer hidden md:block inset-y-0 my-auto invisible">
                    <i className="fa fa-arrow-left text-red-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl border border-gray-300 rounded-full md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 flex flex-center items-center justify-center hover:bg-red-600 hover:text-white transition ease-in-out duration-300"></i>
                  </button>
                  <div className="lg:flex md:w-1/4 lg:w-1/2 border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="lg:flex lg:flex-center items-center justify-center lg:mr-6">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent3.jpg" className="md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-full xl:h-full object-scale-down" alt="agent3"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif md:text-lg md:mt-2 lg:text-xl lg:mt-0 lg:mr-4 xl:text-2xl">Ioin Dante</h3>
                      <p className="font-mono md:text-base lg:mr-4">Jr. UI Designer</p>
                      <p className="font-sans md:text-base lg:mr-4">Follow me:</p>
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
                  <div className="lg:flex md:w-1/4 lg:w-1/2 border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="lg:flex lg:flex-center items-center justify-center lg:mr-6">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent4.jpg" className="md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-full xl:h-full object-scale-down" alt="agent4"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif md:text-lg md:mt-2 lg:text-xl lg:mt-0 lg:mr-4 xl:text-2xl">Kate Haris</h3>
                      <p className="font-mono md:text-base lg:mr-4">Jr. UI Designer</p>
                      <p className="font-sans md:text-base lg:mr-4">Follow me:</p>
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
                  <button className="carousel__button carousel__button--right cursor-pointer hidden md:block top-0 right-0 bottom-0 my-auto invisible">
                    <i className="fa fa-arrow-right text-red-700 sm:text-base md:text-lg lg:text-xl xl:text-2xl border border-gray-300 rounded-full md:h-6 md:w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 flex flex-center items-center justify-center hover:bg-red-600 hover:text-white transition ease-in-out duration-300"></i>
                  </button>
                </div>
              </div>

              <div className="carousel__track-small_container1 md:hidden">
                <div className="carousel__small_track1 carousel-small_slide1 container inset-0 px-3 mx-auto flex self-center justify-center p-3">
                  <div className="border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="items-center justify-center">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent1.jpg" className="object-scale-down" alt="agent1"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center mt-2">
                      <h3 className="font-serif my-1">Haris Brown</h3>
                      <p className="font-mono my-1">Sr. UI Designer</p>
                      <p className="font-sans my-1">Follow me:</p>
                      <div className="my-3">
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-facebook"></i>
                        </button>
                        <button className="bg-blue-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-twitter"></i>
                        </button>
                        <button className="bg-red-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-instagram"></i>
                        </button>
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-linkedin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="items-center justify-center">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent2.jpg" className="object-scale-down" alt="agent2"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center mt-2">
                      <h3 className="font-serif my-1">Emma Brown</h3>
                      <p className="font-mono my-1">Sr. UI Designer</p>
                      <p className="font-sans my-1">Follow me:</p>
                      <div className="my-3">
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-facebook"></i>
                        </button>
                        <button className="bg-blue-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-twitter"></i>
                        </button>
                        <button className="bg-red-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-instagram"></i>
                        </button>
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-linkedin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel__track-small_container2 md:hidden">
                <div className="carousel__small_track2 carousel-small_slide2 container px-3 mx-auto self-center justify-center flex p-3">
                  <div className="border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="items-center justify-center">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent3.jpg" className="object-scale-down" alt="agent3"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif my-1">Ioin Dante</h3>
                      <p className="font-mono my-1">Jr. UI Designer</p>
                      <p className="font-sans my-1">Follow me:</p>
                      <div className="my-3">
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-facebook"></i>
                        </button>
                        <button className="bg-blue-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-twitter"></i>
                        </button>
                        <button className="bg-red-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-instagram"></i>
                        </button>
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-linkedin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-400 border-opacity-50 ml-4 mr-4 justify-center self-center items-center">
                    <div className="items-center justify-center lg:mr-6">
                      <img src="https://bucket4origin.s3.us-east-2.amazonaws.com/agent4.jpg" className="object-scale-down" alt="agent4"></img>
                    </div>
                    <div className="fig-caption mx-auto text-center">
                      <h3 className="font-serif my-1">Kate Haris</h3>
                      <p className="font-mono my-1">Jr. UI Designer</p>
                      <p className="font-sans my-1">Follow me:</p>
                      <div className="my-3">
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-facebook"></i>
                        </button>
                        <button className="bg-blue-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-twitter"></i>
                        </button>
                        <button className="bg-red-500 text-white shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-instagram"></i>
                        </button>
                        <button className="bg-gray-800 text-gray-400 shadow-lg font-normal w-4 items-center align-center outline-none focus:outline-none mr-2" type="button">
                          <i className="fa fa-linkedin"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel_nav my-4 p-2 justify-center hidden">
              <button className="carousel_indicator bg-black rounded-full h-2 w-2 cursor-pointer mr-3"></button>
              <button className="carousel_indicator bg-gray-500 rounded-full h-2 w-2 cursor-pointer ml-3"></button>
            </div>

          </div>

          <div className="cta2">
            <div className="border border-double border-gray-400 rounded bg-red-600 flex flex-wrap px-5 py-16 w-full relative">
              <div className="container mx-auto flex flex-wrap items-center justify-around font-sans text-center">
                <h3 className="text-xl text-white md:w-1/2 mx-4 mt-4 mb-4">“Every Thing is designed. Few Things are Designed well.” - Brian Reed </h3>
                <button className="btn button-medium cursor-pointer bg-gray-500 hover:border-transparent text-white text-md text-center justify-center rounded-lg py-3 px-5 mx-4 mb-2" type="button" >Request A Quote</button>
              </div>
            </div>
          </div>

          <div id="contact" className="py-10">
            <div className="container px-4 mx-auto">
              <div className="text-center">
                <div className="page-title text-center">
                  <h1 className="text-4xl font-semi-bold mt-6 mb-3">Quick Contact</h1>
                  <p className="text-md font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br></br> incididunt ut labore et dolore magna aliqua. </p>
                  <hr className="border-b-2 border-red-700 my-10 inline-block" style={{ width: 100 }}></hr>
                </div>

                <div id="sendmessage" className="hidden text-lg">Your message has been sent. Thank you!</div>
                <div id="errormessage" className="hidden text-lg">Something went wrong. Please try again later</div>

                <div className="form-sec">
                  <form className="contactForm1 px-3 mx-auto inline md:flex relative">
                    <div className="container flex md:w-1/3 px-4 mb-6 text-base">
                      <input type="text" name="name" className="form-control text-field-box border border-gray-500 border-opacity-50 rounded-full focus:outline-none h-16 w-full px-8" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                      <div className="validation"></div>
                    </div>
                    <div className="container flex md:w-1/3 px-4 mb-6 text-base">
                      <input type="email" className="form-control text-field-box border border-gray-500 border-opacity-50 rounded-full focus:outline-none h-16 w-full px-8" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                      <div className="validation"></div>
                    </div>
                    <div className="container flex md:w-1/3 px-4 mb-6 text-base">
                      <input type="text" className="form-control text-field-box border border-gray-500 border-opacity-50 rounded-full focus:outline-none h-16 w-full px-8" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validation"></div>
                    </div>
                  </form>
                  <form className="contactForm2 mb-6 mx-auto relative text-base">
                    <div className="col-md-12 form-group container px-6">
                      <textarea className="form-control text-field-box my-6 px-6 border border-gray-500 border-opacity-50 rounded-lg focus:outline-none w-full" style={{ height: 220, lineHeight: 4 }} name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                      <div className="validation"></div>
                    </div>
                    <button className="btn button-medium bg-red-600 text-white text-md text-center justify-center rounded-lg py-3 px-5" id="contact-submit" type="submit" name="contact">Submit Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <Footer />
          <FooterBottom />
        </div >
      </main >
    </>
  );
};
import React from 'react'

const Service = () => {
  return (
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
  )
}

export default Service;

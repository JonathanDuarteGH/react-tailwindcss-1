import React from 'react'

const Portfolio = () => {
  return (
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
  )
}

export default Portfolio;

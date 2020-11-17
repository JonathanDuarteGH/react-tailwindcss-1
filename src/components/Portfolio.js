import React, { useState } from 'react'

const Portfolio = () => {
  const buttonList = ['All', 'App', 'Card', 'Logo', 'Web'];
  const imageList =
    [
      {
        name: 'App 1',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/app1.jpg',
      },
      {
        name: 'Web 2',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/web2.jpg',
      },
      {
        name: 'App 3',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/app3.jpg',
      },
      {
        name: 'Card 1',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/card1.jpg',
      },
      {
        name: 'Card 2',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/card2.jpg',
      },
      {
        name: 'Web 3',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/web3.jpg',
      },
      {
        name: 'Card 3',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/card3.jpg',
      },
      {
        name: 'App 2',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/app2.jpg',
      },
      {
        name: 'Logo 1',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/logo1.jpg',
      },
      {
        name: 'Logo 3',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/logo3.jpg',
      },
      {
        name: 'Web 1',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/web1.jpg',
      },
      {
        name: 'Logo 2',
        image: 'https://bucket4origin.s3.us-east-2.amazonaws.com/logo2.jpg',
      },
    ];

  const [fade, setFade] = useState(false);

  const handleOnChange = (param) => {
    if (setFade(!fade)) {
      switch (param) {
        case 'App':
          return (imageList[0] && imageList[2] && imageList[7]);
        case 'Card':
          return (imageList[3] && imageList[4] && imageList[6]);
        case 'Logo':
          return (imageList[8] && imageList[9] && imageList[11]);
        case 'Web':
          return (imageList[1] && imageList[5] && imageList[10]);
        default:
          return (imageList);
      }
    }
  }

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
            {buttonList.map((item, index) => (
              <li data-filter=".filter-all .filter-app, .filter-card, .filter-logo, .filter-web" className="filter-active" key={index}>
                <button href="#All" className="btn btn-banner text-black uppercase bg-gray-200 text-md text-center flex mx-4 mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:outline-none focus:bg-red-600 transition ease-in-out duration-300">{item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4" onChange={handleOnChange}>
          {imageList.map((item, index) => (
            <a href="" key={index}>
              <div className='cursor-pointer relative overflow-hidden'>
                <img className='h-full w-full object-none object-left transition duration-700 ease-in-out transform hover:-translate-y-4' src={item.image} alt={item.name} />
                <div className='absolute pl-1 pt-2 leading-tight h-16 w-full bg-red-600 -bottom-20 transition duration-300 ease-in-out transform hover:-translate-y-4'>
                  <h4 className='text-white text-sm font-bold'>{item.name}</h4>
                  <span className='text-white text-xs font-normal'>Alored dono par</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio;

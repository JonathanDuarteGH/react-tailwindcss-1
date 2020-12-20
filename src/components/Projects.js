import React, { useState } from 'react'
import { buttonList, imageList, appList, cardList, logoList, webList } from './subProjects/Project'
import { animated, useSpring } from 'react-spring'

const Projects = () => {
  const [isGrid, setIsGrid] = useState('')
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
        <div className="w-full mb-12 list-none flex justify-center flex-wrap">
          {buttonList.map(item => (
            <button
              type="button"
              key={item}
              className="btn btn-banner text-black uppercase bg-gray-200 text-md text-center flex mx-4 mb-2 px-6 py-2 border rounded hover:bg-red-600 hover:text-white focus:text-white focus:outline-none focus:bg-red-600 transition ease-in-out duration-300"
              onClick={() => setIsGrid(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(isGrid === "All" || isGrid === "") && imageList.map((item, i) => (
            <WebImage key={i} src={item} />
          ))}
          {isGrid === "App" && appList.map((item, i) => (
            <WebImage key={i} src={item} />
          ))}
          {isGrid === "Card" && cardList.map((item, i) => (
            <WebImage key={i} src={item} />
          ))}
          {isGrid === "Logo" && logoList.map((item, i) => (
            <WebImage key={i} src={item} />
          ))}
          {isGrid === "Web" && webList.map((item, i) => (
            <WebImage key={i} src={item} />
          ))}
        </div>
      </div>
    </div>
  )
};

const WebImage = ({ src }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })
  return (
    <div className='cursor-pointer relative overflow-hidden'>
      <animated.img className="h-full w-full object-none object-left transition duration-700 ease-in-out transform hover:-translate-y-4" src={src.image} alt={src.name} style={{ ...props }} />
      <div className='absolute pl-1 pt-2 leading-tight h-16 w-full bg-red-600 -bottom-20 transition duration-300 ease-in-out transform hover:-translate-y-4'>
        <h4 className='text-white text-sm font-bold'>{src.name}</h4>
        <span className='text-white text-xs font-normal'>Alored dono par</span>
      </div>
    </div>
  )
}

export default Projects;

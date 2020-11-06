import React from 'react'

const Cta2 = () => {
  return (
    <div className="cta2">
      <div className="border border-double border-gray-400 rounded bg-red-600 flex flex-wrap px-5 py-16 w-full relative">
        <div className="container mx-auto flex flex-wrap items-center justify-around font-sans text-center">
          <h3 className="text-xl text-white md:w-1/2 mx-4 mt-4 mb-4">“Every Thing is designed. Few Things are Designed well.” - Brian Reed </h3>
          <button className="btn button-medium cursor-pointer bg-gray-500 hover:border-transparent text-white text-md text-center justify-center rounded-lg py-3 px-5 mx-4 mb-2" type="button" >Request A Quote</button>
        </div>
      </div>
    </div>
  )
}

export default Cta2;

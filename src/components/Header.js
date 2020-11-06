import React from 'react'

const Header = () => {
  return (
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
    </div>
  )
}

export default Header;

import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="relative mx-auto py-6 px-0 bg-gray-900">
        <div className="items-center text-center py-6 px-0 leading-loose">
          <div className="text-white text-3xl justify-center">
            <h3>Follow us on</h3>
          </div>
          <div className="mt-6">
            <button className="bg-gray-800 text-gray-400 shadow-lg font-normal h-10 w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
              <i className="fa fa-facebook"></i>
            </button>
            <button className="bg-gray-800 text-gray-400 shadow-lg font-normal h-10 w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
              <i className="fa fa-twitter"></i>
            </button>
            <button className="bg-gray-800 text-gray-400 shadow-lg font-normal h-10 w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
              <i className="fa fa-instagram"></i>
            </button>
            <button className="bg-gray-800 text-gray-400 shadow-lg font-normal h-10 w-10 items-center align-center outline-none focus:outline-none mr-2" type="button">
              <i className="fa fa-linkedin"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
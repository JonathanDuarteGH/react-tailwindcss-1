import React from 'react'

export default function FooterBottom() {
  const mystyle = {
    visibility: 'visible'
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer-bottom bg-gray-800 py-6">
      <div className="container items-center mx-auto md:justify-between justify-center leading-loose">
        <div style={mystyle} className="text-center text-lg text-white">
          <p>Copyright &copy; {currentYear}, All Rights Reserved.</p>
          <div className="footer_copyright">
            Designed in <a href="https://tailwindcss.com/" className="text-red-500">tailwindcss.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from 'react'

const Contact = () => {
  return (
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
  )
}

export default Contact;

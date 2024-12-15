import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="bg-[#222831] text-white py-10 px-5 sm:px-20 lg:px-40">
     
      
      <div className="flex flex-wrap justify-around items-start mb-10">
        
        <div className="w-full sm:w-1/3 mb-10 sm:mb-0">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +91-98390475945
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            thinkinddia@nitp.ac.in
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Ashok Rajpath,NIT More,<br/>NIT PATNA
          </p>
        </div>

        <div className="w-full sm:w-2/3">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="bg-white p-6 rounded-lg shadow-lg text-black">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea id="message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
            </div>
            <button type="submit" className="bg-[#F96D00] text-white py-2 px-4 rounded-lg hover:bg-[#E55B00]">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

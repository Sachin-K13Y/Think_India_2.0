import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faBullseye, faGlobe, faChartLine, faHistory } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'



const AboutUs = () => {

  useEffect(() => {
    
    Aos.init({duration:1500});
  
    }
  , [])
  return (
    <div className="bg-gray-900 text-white mt-[100px]">
     
   

     
      <section className="py-10 px-5 sm:px-20 lg:px-40">
        <div className="flex flex-wrap justify-center space-x-3 items-start">
          
         
          <div className="bg-[#222831] rounded-lg shadow-lg p-6 mb-8 w-full sm:w-1/2 lg:w-1/3  " data-aos="slide-right">
            <FontAwesomeIcon icon={faUsers} className="text-5xl text-[#F96D00] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Who We Are</h3>
            <p className="text-lg mb-4">
              We are a dedicated team of professionals committed to delivering high-quality products and services to our customers. Our expertise spans across various domains, ensuring comprehensive solutions for all your needs.
            </p>
          </div>
          
  
          <div className="bg-[#222831] rounded-lg shadow-lg p-6 mb-8 w-full sm:w-1/2 lg:w-1/3" data-aos="slide-left">
            <FontAwesomeIcon icon={faBullseye} className="text-5xl text-[#F96D00] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
            <p className="text-lg mb-4">
              Our mission is to empower businesses through innovative solutions, providing unparalleled value and fostering lasting relationships with our clients.
            </p>
          </div>
          
     
          <div className="bg-[#222831] rounded-lg shadow-lg p-6 mb-8 w-full sm:w-1/2 lg:w-1/3" data-aos="slide-up">
            <FontAwesomeIcon icon={faGlobe} className="text-5xl text-[#F96D00] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Our Vision</h3>
            <p className="text-lg mb-4">
              To be a global leader in our industry, recognized for our commitment to excellence, innovation, and sustainability.
            </p>
          </div>
       
          <div className="bg-[#222831] rounded-lg shadow-lg p-6 mb-8 w-full sm:w-1/2 lg:w-1/3" data-aos="slide-up" data-aos-duration="2000">
            <FontAwesomeIcon icon={faChartLine} className="text-5xl text-[#F96D00] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center">Our Values</h3>
            <p className="text-lg mb-4">
              Integrity, customer focus, and continuous improvement are at the core of everything we do. We believe in creating a positive impact through our work and upholding the highest standards of professionalism.
            </p>
          </div>
          
          {/* Card 5: Our History */}
          <div className="bg-[#222831] rounded-lg shadow-lg p-6 mb-8 w-full sm:w-1/2 lg:w-1/3" data-aos="slide-right">
            <FontAwesomeIcon icon={faHistory} className="text-5xl text-[#F96D00] mb-4 mx-auto" />
            <h3 className="text-2xl font-bold mb-4 text-center" >Our History</h3>
            <p className="text-lg mb-4">
              Since our founding in [Year], we have consistently delivered outstanding products and services. Our journey has been marked by significant milestones and achievements that reflect our dedication to excellence and innovation.
            </p>
          </div>
          
        </div>
      </section>

     
     
    </div>
  );
};

export default AboutUs;

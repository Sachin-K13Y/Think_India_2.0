import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-[#222831] w-full">
            <div className="flex flex-col lg:flex-row py-8 px-6 md:px-12 lg:justify-between">
                {/* Left Section */}
                <div className="mb-8 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="flex items-center space-x-3 mb-4">
                        <img
                            src="https://media.licdn.com/dms/image/C4D0BAQGRneY6b4SAmQ/company-logo_200_200/0/1677645694453?e=2147483647&v=beta&t=ZdNU1l5N-Gjoc2B9S7lNvcx9O4v06cQUyhZNFWZQZEc"
                            alt="Think India NITP"
                            className="rounded-full w-14"
                        />
                        <span className="text-white font-semibold text-lg">
                            THINK INDIA <br /> NITP
                        </span>
                    </div>
                    <p className="text-white text-sm mb-6">
                        Think India is one of the best <br />
                        initiatives of NITP and has branches <br />
                        in all major colleges.
                    </p>
                    <div className="flex space-x-4 justify-center">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" style={{ color: '#E4405F' }} />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="2xl" style={{ color: '#0077B5' }} />
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" size="2xl" style={{ color: 'black' }} />
                        <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" style={{ color: 'blue' }} />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="mb-8 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-white border-l-4 border-orange-400 px-2 mb-4">Important Links</h1>
                    <ul className="text-white space-y-2">
                        <li className="hover:text-orange-400 cursor-pointer">
                            <NavLink to="/events">Events</NavLink>
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                            <NavLink to="/teams">Teams</NavLink>
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="hover:text-orange-400 cursor-pointer">
                            <NavLink to="/gallery">Gallery</NavLink>
                        </li>
                    </ul>
                </div>

                {/* Right Section */}
                <div className="text-center lg:text-left">
                    <h1 className="text-white border-l-4 border-orange-400 px-2 mb-4">Contact Us</h1>
                    <p className="text-white mb-2">
                        Ashok Rajpath, Patna <br />
                        Bihar-800005, India
                    </p>
                    <p className="text-white mb-2">Ph: +91-975794974</p>
                    <p className="text-white">Email: thinkindia@nitp.ac.in</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

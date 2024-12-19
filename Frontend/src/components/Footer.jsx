import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="bg-[#222831] w-screen">
            <div className="flex flex-col md:flex-row py-5 justify-between px-5 md:px-10">
                {/* Left Section */}
                <div className="px-3 mb-6 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <span>
                            <img
                                src="https://media.licdn.com/dms/image/C4D0BAQGRneY6b4SAmQ/company-logo_200_200/0/1677645694453?e=2147483647&v=beta&t=ZdNU1l5N-Gjoc2B9S7lNvcx9O4v06cQUyhZNFWZQZEc"
                                alt="Think India NITP"
                                className="rounded-full w-14"
                            />
                        </span>
                        <span className="text-white font-semibold text-center">
                            THINK INDIA <br /> NITP
                        </span>
                    </div>
                    <p className="text-white py-5 text-sm">
                        Think India is one of the best <br />
                        of NITP and has branches in all <br />
                        major colleges.
                    </p>
                    <div className="flex space-x-4">
                        <FontAwesomeIcon icon="fa-brands fa-instagram" size="2xl" style={{ color: '#E4405F' }} />
                        <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size="2xl" style={{ color: '#0077B5' }} />
                        <FontAwesomeIcon icon="fa-brands fa-x-twitter" size="2xl" style={{ color: 'black' }} />
                        <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" style={{ color: 'blue' }} />
                    </div>
                </div>

                {/* Middle Section */}
                <div className="mb-6 md:mb-0">
                    <h1 className="text-white border-l-4 border-orange-400 px-2 mb-2">Important Links</h1>
                    <ul className="text-white space-y-1">
                        <li>Events</li>
                        <li>About Us</li>
                        <li>Teams</li>
                        <li>Home</li>
                        <li>Gallery</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h1 className="text-white border-l-4 border-orange-400 px-2 mb-2">Contact Us</h1>
                    <p className="text-white">
                        Ashok Rajpath, Patna <br />
                        Bihar-800005, India
                    </p>
                    <p className="text-white">Ph: +91-975794974</p>
                    <p className="text-white">Email: thinkindia@nitp.ac.in</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

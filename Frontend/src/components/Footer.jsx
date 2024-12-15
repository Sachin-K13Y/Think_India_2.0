import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className=' bg-[#222831] w-full h-[300px]'>
           <div className=' flex py-5 justify-between px-10'>

            <div className=' px-3'>

            <div className='flex items-center space-x-2'>

                <span><img src="https://media.licdn.com/dms/image/C4D0BAQGRneY6b4SAmQ/company-logo_200_200/0/1677645694453?e=2147483647&v=beta&t=ZdNU1l5N-Gjoc2B9S7lNvcx9O4v06cQUyhZNFWZQZEc" alt="" className=' rounded-full w-14'/></span>
                <span className=' text-white font-semibold text-center'>THINK INDIA <br/>NITP</span>

            </div>
            <p className=' text-white py-5 text-sm'>Think India is One of the Best<br/>of NITP has branches in all <br/>major colleges</p>
            <span className=' flex space-x-4'>
            <FontAwesomeIcon icon="fa-brands fa-instagram" size='2xl' style={{color:'#E4405F'}}/>
            <FontAwesomeIcon icon="fa-brands fa-linkedin-in" size='2xl' style={{color:'#0077B5'}} />
            <FontAwesomeIcon icon="fa-brands fa-x-twitter" size='2xl'color='black'/>
            <FontAwesomeIcon icon="fa-brands fa-facebook" size='2xl' color='blue'/>
            </span>

            </div>



            <div>
                <h1 className=' text-white border-l-4 border-orange-400 px-2'>Important Links</h1>
                <ul className='text-white'>
                    <li>Events</li>
                    <li>About Us</li>
                    <li>Teams</li>
                    <li>Home</li>
                    <li>Gallery</li>
                </ul>
            </div>

            <div className=' items-center'>
            <h1 className=' text-white border-l-4 border-orange-400 px-2'>Contact Us</h1>

            <p className=' text-white'>Ashok Rajpath,Patna<br/>Bihar-800005,India <br/></p>
            <p className=' text-white'>ph-+91-975794974</p>
            <p className=' text-white'>Email:thinkindia@nitp.ac.in</p>
            </div>
        
           </div>
        </footer>
    );
};

export default Footer;

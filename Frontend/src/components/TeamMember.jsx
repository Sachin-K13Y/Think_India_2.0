import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const TeamMember = ({name,imageUrl,branch,description,linkedin}) => {

  useEffect(() => {
    
    Aos.init({duration:1000});
  
    }
  , [])
 
  return (
    <div  className=' bg-[#222831] w-[340px] h-[400px] rounded-lg p-3 text-center mx-10 my-5 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ' data-aos="fade-up"  >

      
        <img src={imageUrl} width='180px' className=' rounded-full mx-auto' />

        <h1 className=' text-[#F96D00] text-center text-xl font-semibold'>{name}</h1>

        <span className=' flex justify-center space-x-4'>
        <span className=' text-white'><a href={linkedin}><FontAwesomeIcon icon="fa-brands fa-linkedin" size='xl' /></a></span>
        <span className=' text-white'><a href={linkedin}><FontAwesomeIcon icon="fa-brands fa-github" size='xl' /></a></span>
        <span className=' text-white'><a href={linkedin}><FontAwesomeIcon icon="fa-brands fa-instagram" size='xl' style={{color: "#f4f5f5",}} /></a></span>
        </span>
        <p className=' text-white text-center '>Branch: {branch}</p>


        
        <p className=' text-white'>{description}</p>


    </div>
  )
}

export default TeamMember
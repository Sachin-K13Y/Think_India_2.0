import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'
const TeamIntroCard = ({title,icon,type}) => {
  return (
    
    <div className=' p-4 w-[240px]  bg-[#222831] text-white m-5 mx-20 flex flex-wrap items-center rounded-xl border border-orange-400 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ' > 
    <span> <FontAwesomeIcon icon={`fa-${type} fa-${icon}  `} size='xl' color='#F96D00' /></span>

    <h2 className='text-center mx-auto'>{title}</h2>

    </div>
   
  
    
  )
}

export default TeamIntroCard
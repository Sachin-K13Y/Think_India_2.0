import React, { useState } from 'react'
import TeamMember from '../components/TeamMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import axiosInstance from '../services'







const Teams = () => {
    const [teamData,setTeamData] = useState([])
    console.log(teamData);
    useEffect(() => {
    
        Aos.init({duration:1000});

        axiosInstance.get('/team/getmember')
        .then(response =>{
            setTeamData(response.data.members);
            
        })
        .catch((err)=>{
            console.log("Error Fetching team data:",err);
        })
        
      
        }
      , [])
     
  return (
    <div className=' mt-[100px] bg-gray-900 min-h-screen py-10 px-3'> 

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Office Bearers </h1>
           
           <div className=' bg-gray-900 min-h-screen  px-2 py-4 flex flex-wrap justify-center' >
        

        {
            teamData.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                linkedin={member.linkedin}
                github = {member.github}
                instagram = {member.instagram}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Web Team </h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            
            teamData.filter((member)=>member.team === 'webteam').map((member,index)=>(
                
                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                linkedin={member.linkedin}
                />
            ))
        }

    </div>

           

    </div>

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Android Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            teamData.filter((member)=>member.team === 'androidteam').map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                />
            ))
        }

    </div>

    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Technical Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            teamData.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                linkedin={member.linkedin}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>PR Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            teamData.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Content and Media Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            teamData.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                />
            ))
        }

    </div>

           

    </div>
    <div>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Outreach Team</h1>
           
           <div className=' bg-gray-900 min-h-screen  px-20 py-4 flex flex-wrap justify-center'>
        

        {
            teamData.map((member,index)=>(

                <TeamMember
                
                key={index}
                name={member.name}
                branch={member.branch}
                imageUrl={member.imageUrl}
                description={member.description}
                />
            ))
        }

    </div>

           

    </div>

           

    </div>
    

    </div>


  )


   
}

export default Teams
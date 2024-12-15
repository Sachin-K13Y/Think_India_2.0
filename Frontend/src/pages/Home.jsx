import React, { useEffect } from 'react'
import AnnouncementCard from '../components/AnnouncementCard';
import EventCard from '../components/EventCard';
import { useState } from 'react';
import TeamIntroCard from '../components/TeamIntroCard';
import AboutUsCard from '../components/AboutUsCard';
import { icon } from '@fortawesome/fontawesome-svg-core';

import Aos from 'aos';
import 'aos/dist/aos.css'
import axiosInstance from '../services';

const announcements = [
  {
    title: 'Announcement 1',
    date: 'June 15, 2024',
    image: 'https://www.shutterstock.com/shutterstock/photos/1949944333/display_1500/stock-vector-megaphone-with-important-announcement-vector-flat-1949944333.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
  },
  {
    title: 'Announcement 1',
    date: 'June 15, 2024',
    image: 'https://www.shutterstock.com/shutterstock/photos/1949944333/display_1500/stock-vector-megaphone-with-important-announcement-vector-flat-1949944333.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
  },
  {
    title: 'Announcement 1',
    date: 'June 15, 2024',
    image: 'https://www.shutterstock.com/shutterstock/photos/1949944333/display_1500/stock-vector-megaphone-with-important-announcement-vector-flat-1949944333.jpg',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
  },
 

];

const events = [
    {
      title: 'Hackofest',
      date: 'July 5, 2024',
      image: 'https://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeg',
      registerLink: '#register-event-1',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
    },
  
    {
      title: 'Hackofest',
      date: 'July 5, 2024',
      image: 'https://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeg',
      registerLink: '#register-event-1',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
    },
  
    {
      title: 'Hackofest',
      date: 'July 5, 2024',
      image: 'https://assets.devfolio.co/hackathons/748cbead053240aeba0e3f0fe1181ba1/assets/cover/388.jpeg',
      registerLink: '#register-event-1',
      description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro',
    },
  
  
  
   
  ];

  const Team=[
    {title:'Web Team',
      type:'solid',
     icon:'globe'},
    {title:'Android Team',
      icon:'android',
      type:'brands'
    

    },
    {title:'Technical Team',
    icon:'solid',
    type:'gear'
    },
    {title:'Content and Media Team',
     icon:'camera',
     type:'solid'
    },
    {title:'Outreach Team',
     icon:'handshake',
     type:'regular'
    },
    {title:'PR Team',
     icon:'bullhorn',
     type:'solid'
    },
  ]


const ThinkIndiaNITP='https://media.licdn.com/dms/image/C4D0BAQGRneY6b4SAmQ/company-logo_200_200/0/1677645694453?e=2147483647&v=beta&t=ZdNU1l5N-Gjoc2B9S7lNvcx9O4v06cQUyhZNFWZQZEc'



  const aboutUsSections = [
    {
      title: 'About Us',
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quidem dolorem soluta. Quibusdam possimus earum blanditiis nobis, cupiditate ipsum ad corrupti voluptates similique dolores porro doloremque numquam aspernatur, nulla perspiciatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam porro magni obcaecat eius?',
    },
    {
      title: 'Vision',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi suscipit veniam natus, nesciunt dolor qui aspernatur illum laudantium praesentium porro quisquam quae. Harum laboriosam impedit ipsum, nulla facere quo in. Lorem ipsum dolor sit amet consectetur adipisicing elit. At placeat dolore quae asperiores. A quos dolor consequuntur, tempora voluptatibus culpa eos, optio omnis natus enim sed! Harum consequatur incidunt distinctio?',
    },
    {
      title: 'Mission',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, adipisci ipsam nesciunt cum excepturi, magnam corrupti minus, eligendi nostrum velit qui tempore optio officiis a amet doloremque neque accusantium eveniet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nemo laborum cupiditate voluptas praesentium ipsum explicabo, recusandae voluptates incidunt commodi officia, nulla quidem iure quod ex minus aperiam nostrum modi!',
    },
  ];



  const Home = () => {
    const [galleryImages, setGalleryImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
  
    useEffect(() => {
      Aos.init({ duration: 1000 });
      axiosInstance.get('/events/getphoto')
      .then((response=>{
        console.log(response.data.Photos);
        setGalleryImages(response.data.Photos);
        
      }))
       
        
    }, []);
  
    useEffect(() => {
      if (galleryImages.length > 0) {
        setSelectedImage(galleryImages[0]);
      }
    }, [galleryImages]);
  
    const handleClickImage = (image) => {
      setSelectedImage(image);
    };
  return (


        <div className=' mt-[100px]'>
        
        {/****************Hero Section STARTS***************** */}
    <div className=' bg-gray-900 w-full h-screen flex justify-between p-10 items-center'>

    
        <div className=' animate-bounce-slow' data-aos="fade-up" >
            <h1 className=' text-[#F2F2F2] text-[70px] text-center'>Welcome To<br/><span className=' text-[#F96D00] font-semibold'>Think India</span> X NITP <br/>Student Chapter</h1>

            <div className='flex justify-center'>
                <button className=' bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-3xl text-[30px]'>Join Us</button>
            </div>

        </div>

        <div className=' mr-14'>
            <img src={ThinkIndiaNITP} alt="ThinkIndialogo" width='400px' className=' rounded-full' />
        </div>
        

    </div>
        {/****************Hero Section ENDS***************** */}




    {/********************ABOUT US ******************** */}

    <div className=' bg-gray-900 px-3'>
        {/***********ABOUT US SECTION********** */}
        <h1 className="text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 ">About Us</h1>

<div className="flex flex-wrap justify-evenly " data-aos="zoom-in">
  {aboutUsSections.map((section, index) => (
    <AboutUsCard
      key={index}
      title={section.title}
      description={section.description}
    />
  ))}
</div>
       {/****************About US ENDS*********************/}



        
     {/******************Announcement Section Starts********* */}

     <div className=' p-3'>
        <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Announcements</h1>

        
        <div className='flex flex-wrap justify-evenly' data-aos="zoom-in">
          {announcements.map((announcement, index) => (
            <AnnouncementCard 
              key={index} 
              title={announcement.title} 
              date={announcement.date} 
              image={announcement.image} 
              description={announcement.description} 
            />
          ))}
        </div>

        
     </div>

    {/******************Announcement Section Ends********* */}



    {/***********EVENTS SECTION********** */}
    <div className='bg-gray-900] py-10 px-3'>

    <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Events</h1>
  
        <div className='flex flex-wrap justify-evenly ' data-aos="zoom-in">
          {events.map((event, index) => (
            <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg bg-[#222831] text-[#F2F2F2] m-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
              {event.image && (
                <img className="w-full h-48 object-cover" src={event.image} alt={event.title} />
              )}
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[#F96D00]">{event.title}</div>
                <p>{event.date}</p>
                <div>{event.description}</div>
                <a href={event.registerLink}>
                  Register
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>


            {/********************GALLERY ******************** */}
      <div className='bg-gray-900 py-10 px-3'>
      <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Gallery</h1>
  
        <div className='flex flex-wrap justify-center ' data-aos="slide-right" data-aos-duration="3000">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image.imageUrl}
              alt={`Gallery Image ${index + 1}`}
              className='w-40 h-40 object-cover m-2 rounded cursor-pointer hover:opacity-75 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 '
              onClick={() => handleClickImage(image)}
            />
          ))}
        </div>
    {selectedImage && selectedImage.imageUrl && (
        <div className='flex justify-center mt-5' data-aos="zoom-in">
          <img src={selectedImage.imageUrl} alt='Selected Image' className='w-[800px] h-auto rounded-lg shadow-lg ' />
        </div>
    )
  }
  
      </div>
        



    {/****************Team Info Card *****************/}

    <div className=' px-3 py-10'>
    <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>Teams</h1>

    <div className=' flex flex-wrap justify-center py-3' data-aos="fade-up">

          {
            Team.map((team,index) =>(

                <TeamIntroCard
                key={index}
               title={team.title}
               icon={team.icon}
               type={team.type}

                
                />

            ) )

          
        
        }
    

    </div>
    </div>


    

    

        
    </div>









 
   


    </div>
  )
}

export default Home
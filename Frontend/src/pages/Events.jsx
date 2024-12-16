import React, { useEffect } from 'react'
import EventCard from '../components/MainEventCard.jsx'
import { useState } from 'react';
import axiosInstance from '../services.js';

const Events = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    
    const [eventData,setEventData] = useState([]);
    // console.log(eventData);
    useEffect(()=>{
      axiosInstance.get('/events/getevents')
      .then((response)=>{
        setEventData(response.data.events);
      })
      .catch((err)=>
        // console.log(err)
    )
    },[])
  return (

    <div className="mt-[100px] bg-gray-900 py-10 px-3">
    {/***********EVENTS SECTION********** */}
    <h1 className="text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3">Events</h1>

    <div className="flex flex-wrap">
      {eventData.map((event, index) => (
        <EventCard
          key={index}
          title={event.title}
          images={event.imageUrl}
          description={event.description}
        />
      ))}
    </div>
  </div>
  )
}

export default Events
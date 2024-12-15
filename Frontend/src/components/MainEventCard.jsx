import React from 'react';

const EventCard = ({ title, images, description }) => {
  return (
    <div className=" w-[850px] rounded overflow-hidden shadow-lg bg-[#222831] text-[#F2F2F2] m-4 mx-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-3xl mb-2 text-center text-[#F96D00]  ">{title}</div>
      </div>
      {images && images.length > 0 && (
        <div className="flex flex-wrap justify-center">
          
            <img
              
              className="w-[800px]  object-cover"
              src={images} 
              
            />
          
        </div>
      )}
      <div className="px-6 py-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EventCard;

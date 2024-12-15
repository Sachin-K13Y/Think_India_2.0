import React from 'react';

const EventCard = ({ title, date, image, registerLink }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 ">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#F96D00]">{title}</div>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </button>
      </div>
    </div>
  );
};

export default EventCard;

import React from 'react';

const AnnouncementCard = ({ title, date, image, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#222831] text-[#F2F2F2] m-4 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 ">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt="Announcement" />
      )}
      <div className="px-6 py-4 text-[#F2F2F2]">
        <div className="font-bold text-xl mb-2 text-[#F96D00]">{title}</div>
        <p className="text-sm mb-2">{date}</p>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCard;

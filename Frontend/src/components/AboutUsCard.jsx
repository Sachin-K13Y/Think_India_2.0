import React from 'react';

const AboutUsCard = ({ title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-[#222831] text-[#F2F2F2] m-4 p-6 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  ">


      <div className="font-bold text-xl mb-2 text-center text-[#F96D00]">{title}</div>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default AboutUsCard;

import React, { useState, useEffect } from 'react';
import TeamMember from '../components/TeamMember';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axiosInstance from '../services';

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  const teamCategories = [
    { name: 'Office Bearers', filter: null },
    { name: 'Web Team', filter: 'webteam' },
    { name: 'Android Team', filter: 'androidteam' },
    { name: 'Technical Team', filter: 'technicalteam' },
    { name: 'PR Team', filter: 'prteam' },
    { name: 'Content and Media Team', filter: 'contentmedia' },
    { name: 'Outreach Team', filter: 'outreachteam' },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 });

    axiosInstance
      .get('/team/getmember')
      .then((response) => {
        setTeamData(response.data.members);
      })
      .catch((err) => {
        console.error("Error Fetching team data:", err);
      });
  }, []);

  return (
    <div className='mt-[100px] bg-gray-900 min-h-screen py-10 px-3'>
      {teamCategories.map((category, index) => (
        <div key={index}>
          <h1 className='text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3'>
            {category.name}
          </h1>
          <div className='bg-gray-900 px-20 py-4 flex flex-wrap justify-center'>
            {teamData
              .filter((member) =>
                category.filter ? member.team === category.filter : true
              )
              .map((member, idx) => (
                <TeamMember
                  key={idx}
                  name={member.name}
                  branch={member.branch}
                  imageUrl={member.imageUrl}
                  description={member.description}
                  linkedin={member.linkedin}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;

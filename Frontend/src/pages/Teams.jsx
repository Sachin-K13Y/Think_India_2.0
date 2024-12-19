import React, { useState, useEffect } from 'react';
import TeamMember from '../components/TeamMember';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axiosInstance from '../services';

const teamSections = [
  { title: 'Office Bearers', filter: "officebearers" },
  { title: 'Web Team', filter: 'webteam' },
  { title: 'Android Team', filter: 'androidteam' },
  { title: 'Technical Team', filter: 'technicalteam' },
  { title: 'PR Team', filter: 'prteam' },
  { title: 'Content and Media Team', filter: 'contentandmediateam' },
  { title: 'Outreach Team', filter: 'outreachteam' },
];

const Teams = () => {
  const [teamData, setTeamData] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    axiosInstance
      .get('/team/getmember')
      .then((response) => setTeamData(response.data.members))
      .catch((err) => console.error('Error Fetching team data:', err));
  }, []);

  return (
    <div className=' mt-[100px] bg-gray-900 min-h-screen py-10 px-3'> 
      {teamSections.map(({ title, filter }) => (
        <div key={title}>
          <h1 className=' text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3 '>{title}</h1>
          <div className='bg-gray-900 px-2 py-4 flex flex-wrap justify-center'>
            {teamData
              .filter((member) => !filter || member.team === filter)
              .map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  branch={member.branch}
                  imageUrl={member.imageUrl}
                  description={member.description}
                  linkedin={member.linkedin}
                  github={member.github}
                  instagram={member.instagram}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;

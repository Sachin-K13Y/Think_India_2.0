import React, { useEffect, useState } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import axiosInstance from '../services';

<<<<<<< HEAD


const AdminLayout =  () => {
    const [isAdmin, setIsAdmin] = useState(null); 
    
    useEffect(() => {
        
        const checkAdmin = async () => {
            try {
                const response = await axiosInstance.get('/user/isadmin', { withCredentials: true });
                console.log(response.data);
                if (response.data.Success==true) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } catch (error) {
                console.error('Error during admin check:', error);
                setIsAdmin(false); 
            }
        };

        checkAdmin();
    }, []);

    if (isAdmin === null) {
        return <div>Loading...</div>; 
    }
  
    return isAdmin?(
        <div className=' mt-[100px] min-h-screen  bg-[#222831] '>
            <h1 className=' text-[#F96D00] text-center py-4 text-[50px] font-semibold'>Admin Dashboard</h1>
            <nav>
                <ul className=' flex justify-center gap-5'>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/addmember"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Add Member</button></Link>
                    </li>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/updatemember"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Update Member</button></Link>
                    </li>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/deletemember"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Delete Member</button></Link>
                    </li>
                
                    <li className=' text-center pb-4'>
                        <Link to="/admin/addevent"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Add Event</button></Link>
                    </li>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/updateevent"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Update Event</button></Link>
                    </li>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/deleteevent"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Delete Event</button></Link>
                    </li>
                    <li className=' text-center pb-4'>
                        <Link to="/admin/addphoto"><button className=' border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl '>Add Photos</button></Link>
                    </li>
                   
                </ul>
            </nav>
            <div>
  
                <Outlet />
            </div>
        </div>
    ):(<Navigate to={"/"}/>);

=======
const AdminLayout = () => {
 
  return (
    <div className="mt-[100px] min-h-screen bg-[#222831]">
      <h1 className="text-[#F96D00] text-center py-4 text-[50px] font-semibold">Admin Dashboard</h1>
      <nav>
        <ul className="flex justify-center gap-5">
          <li className="text-center pb-4">
            <Link to="/admin/addmember">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Add Member</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/updatemember">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Update Member</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/deletemember">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Delete Member</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/addevent">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Add Event</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/updateevent">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Update Event</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/deleteevent">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Delete Event</button>
            </Link>
          </li>
          <li className="text-center pb-4">
            <Link to="/admin/addphoto">
              <button className="border-4 text-white bg-[#F96D00] text-[30px] p-4 rounded-3xl">Add Photos</button>
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
>>>>>>> 8650b216410f20af75144cd548ab09d3b87fd3a4
};

export default AdminLayout;

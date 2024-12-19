import React, { useEffect, useState } from 'react';
import { Outlet, Link, Navigate } from 'react-router-dom';
import axiosInstance from '../services';

const AdminLayout = () => {
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const response = await axiosInstance.get('/user/isadmin', { withCredentials: true });
                setIsAdmin(response.data.Success ? true : false);
            } catch (error) {
                console.error('Error during admin check:', error);
                setIsAdmin(false);
            }
        };

        checkAdmin();
    }, []);

    if (isAdmin === null) {
        return <div className="text-center mt-20 text-lg">Loading...</div>;
    }

    return isAdmin ? (
        <div className="mt-[80px] min-h-screen bg-[#222831] p-4">
            <h1 className="text-[#F96D00] text-center py-4 text-3xl sm:text-4xl font-semibold">
                Admin Dashboard
            </h1>
            <nav>
                <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-4">
                    {[
                        { path: "/admin/addmember", label: "Add Member" },
                        { path: "/admin/updatemember", label: "Update Member" },
                        { path: "/admin/deletemember", label: "Delete Member" },
                        { path: "/admin/addevent", label: "Add Event" },
                        { path: "/admin/updateevent", label: "Update Event" },
                        { path: "/admin/deleteevent", label: "Delete Event" },
                        { path: "/admin/addphoto", label: "Add Photos" },
                    ].map((item) => (
                        <li key={item.path} className="text-center">
                            <Link to={item.path}>
                                <button className="w-full sm:w-auto border-2 border-[#F96D00] text-white bg-[#F96D00] hover:bg-[#d35500] text-sm sm:text-base md:text-lg p-2 sm:p-3 rounded-xl transition-all">
                                    {item.label}
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className=" p-3">
                <Outlet />
            </div>
        </div>
    ) : (
        <Navigate to="/" />
    );
};

export default AdminLayout;

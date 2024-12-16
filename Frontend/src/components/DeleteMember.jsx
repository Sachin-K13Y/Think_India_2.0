import React, { useState } from 'react';
import axiosInstance from '../services';

const DeleteMemberLayout = () => {
    const [memberId, setMemberId] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setMemberId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!memberId.trim()) {
            setMessage('Please enter a valid Member ID.');
            return;
        }

        try {
            const response = await axiosInstance.delete(`/team/deletemember/${memberId}`);
            // console.log(response.data);
            if (response.status === 200) {
                setMessage('Member deleted successfully.');
                setMemberId(''); 
            }
        } catch (error) {
            setMessage('Failed to delete member. Please try again.');
            console.error('Error deleting member:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="flex items-center justify-center bg-[#222831]">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-[#F96D00] mb-6">
                    Delete Member
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="memberId">
                            Member ID
                        </label>
                        <input
                            type="text"
                            id="memberId"
                            name="memberId"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={memberId}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#d85b00] transition"
                    >
                        Delete Member
                    </button>
                </form>
                {message && (
                    <p className="mt-4 text-center text-sm text-red-600">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default DeleteMemberLayout;

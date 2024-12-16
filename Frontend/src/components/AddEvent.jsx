import React, { useState } from 'react';
import axiosInstance from '../services.js';

const AddEventPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
         if(image) formData.append('image', image);
        
        try {
            const response = await axiosInstance.post('/events/addevents', formData,{ headers: {
                'Content-Type': 'multipart/form-data',
            },});
          
            if (response.status === 200) {
                setMessage('Event added successfully');
                setTitle('');
                setDescription('');
                setImage(null);
            }
        } catch (error) {
            setMessage('Failed to add event');
        }
    };

    return (
        <div className="mt-[100px] bg-gray-900 py-10 px-3">
            <h1 className="text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3">Add Event</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                        rows="4"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Image</label>
                    <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="mt-2 w-full bg-gray-200 px-4 py-2 rounded-lg focus:outline-none"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#d85b00] transition"
                >
                    Add Event
                </button>
                {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
            </form>
        </div>
    );
};

export default AddEventPage;

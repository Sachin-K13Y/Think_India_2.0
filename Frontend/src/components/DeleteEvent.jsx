import React, { useState } from 'react';
import axiosInstance from '../services.js';

const DeleteEventPage = () => {
    const [eventId, setEventId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.delete(`/events/deleteevent/${eventId}`);
            if (response.status === 200) {
                setMessage('Event deleted successfully');
                setEventId('');
            }
        } catch (error) {
            setMessage('Failed to delete event');
        }
    };

    return (
        <div className="mt-[100px] bg-gray-900 py-10 px-3">
            <h1 className="text-[#F2F2F2] text-3xl font-semibold border-l-4 border-[#F96D00] px-3">Delete Event</h1>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700">Event ID</label>
                    <input
                        type="text"
                        value={eventId}
                        onChange={(e) => setEventId(e.target.value)}
                        className="w-full px-4 py-2 mt-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#d85b00] transition"
                >
                    Delete Event
                </button>
                {message && <p className="mt-4 text-center text-sm text-red-600">{message}</p>}
            </form>
        </div>
    );
};

export default DeleteEventPage;

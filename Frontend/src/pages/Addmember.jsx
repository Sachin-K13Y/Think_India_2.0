import React, { useState } from 'react';
import axiosInstance from '../services';
import { toast } from 'react-toastify';

const AddMemberLayout = () => {
    const [loading,setLoading] = useState(false);
    const [image,setImage] = useState(null);
    const [uploadedFile,setUploadedFile] = useState(null);
    const [member, setMember] = useState({
        name: '',
        branch: '',
        team: '',
        description: '',
        image: null,
        instagram:'',
        linkedin:'',
        github:''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setMember((prevState) => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));

        const image = e.target.files[0];
        setUploadedFile(URL.createObjectURL(image));


    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', member.name);
            formData.append('branch', member.branch);
            formData.append('team', member.team);
            formData.append('description', member.description);
            formData.append('instagram', member.instagram);
            formData.append('linkedin', member.linkedin);
            formData.append('github', member.github);
            if (member.image) {
                formData.append('image', member.image); // Append the file
            }

            const response = await axiosInstance.post('/team/addmember', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setLoading(false);
          
            toast.success("Member Added Successfully!");
           
        } catch (error) {
            setLoading(false);
            console.error('Error adding member:', error);
            toast.error("Member Adding Failed!")
        }
    };

    return (
        <div className="flex items-center justify-center  bg-[#222831]">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-[#F96D00] mb-6">
                    Add New Member
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className=' flex justify-center'>
                   
                        <img id='image' class="image" src={uploadedFile} className=' h-32'>

                        </img>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Branch Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="branch">
                            Branch
                        </label>
                        <input
                            type="text"
                            id="branch"
                            name="branch"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.branch}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Team Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="team">
                            Team
                        </label>
                        <input
                            type="text"
                            id="team"
                            name="team"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.team}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Description Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="description">
                            Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.description}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="instagram">
                            Instagram
                        </label>
                        <input
                            type="text"
                            id="instagram"
                            name="instagram"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.instagram}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="linkedin">
                            Linkedin
                        </label>
                        <input
                            type="text"
                            id="linkedin"
                            name="linkedin"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.linkedin}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="github">
                            Github
                        </label>
                        <input
                            type="text"
                            id="github"
                            name="github"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            value={member.github}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Image Input */}
                    <div className="mb-4">
                        <label className="block text-sm font-semibold text-gray-700" htmlFor="image">
                            Image
                        </label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className="mt-2 block w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F96D00]"
                            onChange={handleChange} 
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#F96D00] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#d85b00] transition"
                    >
                       {loading?"Adding...":"Add Memeber"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMemberLayout;

import React, { useState } from 'react';
import axiosInstance from '../services';

function AddPhoto() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadedFile(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


   

 

    try {
        const formData = new FormData();
        formData.append('image', file);
      const response = await axiosInstance.post('/events/addphoto',formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
      (response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 p-6 rounded-lg shadow-md max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label
          htmlFor="photoUpload"
          className="flex items-center justify-center w-40 h-40 bg-gray-800 rounded-full border-2 border-dashed border-gray-600 hover:border-orange-500 cursor-pointer overflow-hidden"
        >
          {uploadedFile ? (
            <img src={uploadedFile} alt="Uploaded Preview" className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-400 text-sm text-center">Click to Upload</span>
          )}
        </label>
        <input
          id="photoUpload"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button
          type="submit"
          className="mt-3 rounded-md border-2 border-gray-400 p-2 text-xl text-gray-400 hover:border-orange-200 hover:text-orange-400"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddPhoto;

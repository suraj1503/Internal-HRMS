import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../shared/NavigationBar';
import { FaCamera } from 'react-icons/fa';
import axios from 'axios';
import { baseUrl } from '../config/config';

const NewEvent = () => {
  const isAdmin = true; 

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    file: null
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        file: file 
      }));
    }
  }, []);

  
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const { eventName, description, file } = formData;

      if (!file) {
        setError('Please upload an image.');
        return;
      }
      setLoading(true); 

      const formDataToSend = new FormData();
      formDataToSend.append('eventName', eventName);
      formDataToSend.append('description', description);
      formDataToSend.append('banner', file);

      try {
        const config = {
          withCredentials: true,
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        };

        const { data } = await axios.post(`${baseUrl}/event/new-event`, formDataToSend, config);

        console.log(data);
        navigate('/events');
      } catch (err) {
        console.error(err);
        setError('There was an error creating the event. Please try again later.');
      } finally {
        setLoading(false); 
      }
    },
    [formData, navigate] 
  )

  return (
    <>
      <NavigationBar />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Create an Event</h1>
        <div className="bg-white p-6 rounded-lg shadow">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-red-500">{error}</div> 
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Name</label>
              <input
                type="text"
                value={formData.eventName}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, eventName: e.target.value }))
                }
                placeholder="Enter event name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Event Description</label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, description: e.target.value }))
                }
                placeholder="Enter a brief description about the event"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                rows="4"
                maxLength={500}
                required
              />
            </div>
            <div>
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center justify-center border border-gray-300 rounded p-2 hover:bg-gray-100"
              >
                {formData.file ? (
                  <>
                    <img
                      src={URL.createObjectURL(formData.file)} 
                      alt="Preview"
                      className="w-16 h-16 object-cover mr-2"
                    />
                    <span>{formData.file.name}</span>
                  </>
                ) : (
                  <>
                    <FaCamera className="w-5 h-5 mr-2 text-gray-500" />
                    <p className="text-gray-500">Upload Image</p>
                  </>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={handleImageChange}
                required
                aria-hidden="true"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? 'Creating Event...' : 'Create Event'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewEvent;

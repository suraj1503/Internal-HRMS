import React, { useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';
// import {ALL_EVENT} from '../../constant/constant.js'

const UploadDialog = ({ open = false, onClose, uploadHandler }) => {
    const [upload, setUpload] = useState({
        caption: "",
        image: null,
        likes:0
    });

    const fileInputRef = useRef(null);

    const handleFileChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            setUpload((prev) => ({ ...prev, image: file }));
        }
    }, []);

    const submitHandler = useCallback(
        (e) => {
            e.preventDefault();
            if(!upload.image){
                alert("Pleas upload an image!")
                return
            } 

            const formData = new FormData()
            formData.append('caption',upload.caption)
            formData.append('image',upload.image)
            uploadHandler(formData)
            setUpload({
                caption: "",
                image: null,
                likes:0
            })
            onClose();
        },
        [upload, onClose]
    );

    const handleCaptionChange = useCallback((e) => {
        setUpload((prev) => ({ ...prev, caption: e.target.value }));
    }, []);

    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="relative w-96 bg-white p-6 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <form onSubmit={submitHandler}>
                    <textarea
                        className="w-full p-2 border border-gray-300 rounded mb-4 outline-none"
                        placeholder="Describe your feeling in 50 words"
                        required
                        maxLength={50}
                        value={upload.caption}
                        onChange={handleCaptionChange}
                        aria-label="Caption input"
                    />

                    <div className="mb-4">
                        <label
                            htmlFor="file-upload"
                            className="cursor-pointer flex items-center justify-center border border-gray-300 rounded p-2 hover:bg-gray-100"
                            aria-label="Upload image"
                        >
                            {upload.image ? (
                                upload.image.name
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
                            required
                            onChange={handleFileChange}
                            ref={fileInputRef}
                            aria-label="File upload"
                            aria-hidden="true"
                        />
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 cursor-pointer"
                        type="submit"
                        aria-label="Submit button"
                    >
                        Submit
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default UploadDialog;
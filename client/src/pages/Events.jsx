import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';
import { easeInOut, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { FaImage, FaArrowDown } from 'react-icons/fa';  // import image icon from Font Awesome
import MasonryGrid from '../shared/MasonryGrid';
import UploadDialog from '../components/dialogs/UploadDialog';

import NavigationBar from '../shared/NavigationBar';
import { ALL_EVENT, USERS } from '../constant/constant.js'
import axios from 'axios';
import { baseUrl } from '../config/config.js';
import Loading from '../shared/Loading.jsx';



const Events = () => {

    const eventId = useParams().id
    const [isLoading,setIsLoading] = useState(false)
    //console.log(eventId)

    const [event, setEvent] = useState({})


    const [uploadImage, setUploadImage] = useState(false);

    const scrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const openDialog = () => {
        setUploadImage(true);
    };

    const closeDialog = () => {
        setUploadImage(false);
    };

    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await axios.get(`${baseUrl}/event?id=${eventId}`, { withCredentials: true })
                //console.log(response)
                setEvent(response.data?.event)

            } catch (error) {
                console.log(error)
            }
        }

        fetchEvent()
    }, [])


    const { banner, creator, description, userEntry, eventName } = event
    
    const uploadSubmitHandler =async (entry) => {
        // console.log(entry)
        setIsLoading(true)
        try {
            const config = {
                withCredentials: true,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };
            const { data } = await axios.put(`${baseUrl}/event/upload?id=${eventId}`,entry,config)
            console.log(data)
            toast.success(data?.message)
            setEvent(data.event)
            
        } catch (error) {
            console.log(error)
            toast.error()
        }
        setIsLoading(false)
    }
    
    // console.log("where:",userEntry);
    // console.log(event)

    return (
        <>
            <UploadDialog open={uploadImage} onClose={closeDialog} uploadHandler={uploadSubmitHandler} />
            <NavigationBar />
            {isLoading && <Loading/>}
            <div className="relative w-full h-120 overflow-hidden object-contain">
                <img
                    className="h-120 w-full md:h-auto"
                    src={banner?.url}
                    alt="Event"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-5">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        {eventName}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                        className="text-lg md:text-xl mt-2 max-w-2xl"
                    >
                        {description}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
                    className='absolute inset-0 text-white flex justify-end m-5 items-end'
                >
                    <h2>
                        Created by <span className='text-2xl font-extrabold'>{creator?.name}</span>
                    </h2>
                </motion.div>
            </div>

            <div className='flex justify-center items-center p-3'>
                <button
                    onClick={openDialog}
                    className='bg-indigo-800 p-2.5 rounded-xl text-white flex space-x-1 items-center cursor-pointer'
                >
                    <FaImage className="w-5 h-5" />
                    <span className='font-bold'>Share your moment</span>
                </button>
            </div>

            {event.userEntry?.length!==0 && <motion.div
                animate={{ y: [-5, 0, -5] }}
                transition={{ duration: 1, repeat: Infinity, ease: easeInOut }}
                className='mx-auto w-[25px] cursor-pointer'
                onClick={scrollDown}
            >
                <FaArrowDown
                    className='w-5 h-5'
                />
            </motion.div>}

            {event?.userEntry && <MasonryGrid userEntry={event?.userEntry} eventId={eventId}/>}
        </>
    );
};

export default Events;

import React, { useEffect, useState } from 'react'
import NavigationBar from '../shared/NavigationBar'
import EventItem from '../components/events/EventItem'

import { ALL_EVENT } from '../constant/constant.js'
import { baseUrl } from '../config/config.js'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion'

const AllEvents = () => {

    const [events, setEvents] = useState([])
    const [create, setCreate] = useState(false)

    const user = useSelector((state) => state.auth)

    const navigate = useNavigate()

    console.log(user)


    useEffect(() => {
        async function fetchEvents() {
            try {
                const response = await axios.get(`${baseUrl}/event/all-events`, {
                    withCredentials: true
                });

                console.log(response.data?.events)
                setEvents(response?.data?.events)
            } catch (error) {
                console.log(error)
            }

        }

        fetchEvents()
    }, [])


    return (
        <>
            <NavigationBar />
            {events.length === 0 &&
                <div className='flex justify-center  '>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-2xl'>There are no events right now!</h1>
                        {user.isAdmin && <p className='text-center'>
                            <span className='font-bold text-sky-900 hover:border-b-1'>
                                <button className='cursor-pointer' onClick={() => navigate('/new-event')}>
                                    Maybe create one!
                                </button>
                            </span>
                        </p>}
                    </div>
                </div>
            }
            <div className='flex flex-wrap gap-5 justify-center p-2'>
                {
                    events.map((event, index) => {
                        const { _id, creator, eventName, description, banner } = event

                        return (
                            <EventItem
                                key={index}
                                creator={creator}
                                eventName={eventName}
                                description={description}
                                img={banner.url}
                                id={_id}
                            />
                        )
                    })
                }
            </div>
            {user.isAdmin && <motion.div
                className='bg-indigo-800 rounded-r-2xl w-[200px] p-2 text-white flex justify-center items-center font-bold'
                initial={{ x: -150 }}
                animate={{ x: create ? 0 : -150 }}
            >
                <h2
                    className='cursor-pointer hover:border-b-1'
                    onClick={() => navigate('/new-event')}
                >
                    Create new event
                </h2>
                <div className='ml-5' onClick={() => { setCreate(prev => !prev) }}>
                    {create ? <FaArrowLeft /> : <FaArrowRight />}
                </div>
            </motion.div>}
        </>
    )
}

export default AllEvents
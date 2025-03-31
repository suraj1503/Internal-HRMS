import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { FaRegHeart,FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ALL_EVENT, USERS } from '../constant/constant.js';
import axios from 'axios';
import { baseUrl } from '../config/config.js';

const MasonryGrid = ({userEntry,eventId}) => {

    const [useEntryAfter,setUserEntryAfter]=useState(userEntry)

    console.log("user entry before:",userEntry)
    const likeHandler = async(_id,userId)=>{
        //console.log(_id,userId,eventId)

        if (!userId) {
            console.error("Error: User ID is undefined!");
            return;
        }

        const config = {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const {data}=await axios.put(`${baseUrl}/event/${eventId}/user/${userId}/entries?id=${_id}`,{},config)
            console.log(data)
            setUserEntryAfter(data?.event?.userEntry)
        } catch (error) {
            console.log(error)
        }
    }


    console.log("user entry after:",useEntryAfter)

    return (
        <motion.div
            className="w-full p-7 bg-gray-100-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 3 }}
                gutterBreakpoints={{ 350: "10px", 750: "15px", 900: "25px" }}
            >
                <Masonry className="gap-4" style={{ columnGap: "20px", rowGap: "20px" }}>
                    {userEntry?.map((entry, entryIndex) => {
                        const {user} = entry
                        console.log("User:",user._id)
                        return entry.entries.map((item, itemIndex) => (
                            <motion.div
                                key={`${entryIndex}-${itemIndex}`}
                                className="relative w-full group"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <img
                                    className="w-full rounded-lg"
                                    src={item.image?.url}
                                    alt={`Gallery ${entryIndex}-${itemIndex}`}
                                />
                                <motion.div
                                    className="absolute inset-0 flex flex-col rounded-xl justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                                >
                                    <div className="flex flex-col justify-center items-center" style={{ textShadow: "0 0 3px rgba(0, 0, 0, 0.7)" }}>
                                        <p className="text-white font-bold text-center">{user?.name}</p>
                                        <p className="text-white text-sm text-center">{item?.caption}</p>
                                    </div>
                                    <button
                                        className="mt-2 px-4 py-1 bg-amber-100 rounded-2xl flex justify-center items-center gap-1 cursor-pointer"
                                        onClick={() => {
                                            console.log("Passing User ID:", user?._id); // Debugging log
                                            if (user?._id) likeHandler(item._id, user._id);
                                        }}
                                    >
                                        {item.likes < 1 ?<FaRegHeart className='text-amber-900' />:<FaHeart className='fill-amber-900'/>}
                                        <span>{item.likes}</span>
                                    </button>
                                </motion.div>
                            </motion.div>
                        ));
                    })}
                </Masonry>
            </ResponsiveMasonry>
        </motion.div>
    );
};

export default MasonryGrid;
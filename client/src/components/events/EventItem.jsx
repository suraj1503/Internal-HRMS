import React from 'react';
import { Link } from 'react-router-dom';

const EventItem = ({ id, creator, description, eventName, img }) => {
    return (
        <Link 
            to={`/events/${id}`} 
            className='xs:w-[150px] xs:h-[200px] md:w-[300px] md:h-[350px] shadow-xl rounded-xl p-2 bg-gray-100 cursor-pointer'
        >
            
            <div className='xs:h-[100px] md:h-[180px] overflow-hidden rounded-xl'>
                <img 
                    className='w-full h-full object-cover' 
                    src={img} 
                    alt={eventName} 
                />
            </div>

        
            <div className='flex flex-col items-center justify-center mt-2'>
                <h1 className='text-center font-bold xs:text-sm md:text-base'>{eventName}</h1>
                <p className='text-sm text-center line-clamp-4 overflow-hidden overflow-ellipsis xs:text-xs md:text-sm'>
                    {description}
                </p>
            </div>
        </Link>
    );
};

export default EventItem;
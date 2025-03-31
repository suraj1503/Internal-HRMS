import { USER_TOKEN } from "../contant/contant.js";
import { Event } from "../model/event-model.js";
import { User } from "../model/user-model.js";
import { ErrorHandler } from "../utility/utils.js";

const createEvent = async (req, res, next) => {
    const { eventName, description } = req.body;

    const user = await User.findById(req.user._id).populate('name')

    if (!user.isAdmin) return next(new ErrorHandler("You don't have permission to create event, only admin can do that", 400))

    const file = req.file;

    if (!file) return next(new ErrorHandler('Please upload the file!', 400))

    let banner = {
        public_id: file.key,
        url: file.location
    }

    const eventPromise = Event.create({
        eventName,
        description,
        banner,
        creator: req.user._id
    })


    user.createdEvent.push(eventPromise._id);

    const updatePromise = user.save()

    try {
        const [event] = await Promise.all([eventPromise, updatePromise])

        const transformedData = {
            eventName,
            description,
            banner,
            creator: user.name
        }
        res.status(200).json({
            success: true,
            message: 'Successfully created event!',
            event: transformedData
        })
    } catch (err) {
        next(err)
    }


}

const getAllEvents = async (req, res, next) => {
    const events = await Event.find()

    if (!events) return next(new ErrorHandler('No event created, maybe create one', 401))

    res.status(200).json({
        success: true,
        events
    })
}

const specificEvent = async (req, res, next) => {
    const eventId = req.query.id

    const event = await Event.findById(eventId).populate("creator", "name").populate('userEntry.user', "name");

    if (!event) return next(new ErrorHandler('No such event found', 404));

    res.status(200).json({
        success: true,
        event,
    })

}

const myEvents = async (req, res, next) => {

    const [user, events] = await Promise.all([
        User.findById(req.user._id),
        Event.find({ creator: req.user._id })
    ])

    if (!user.isAdmin) return next(new ErrorHandler("You don't have access to create an event!", 401))

    res.status(200).json({
        success: true,
        events
    })
}

const fillDetails = async (req, res, next) => {
    const { caption } = req.body;
    const eventId = req.query.id;

    if (!eventId || !caption) return next(new ErrorHandler('Please provide event ID and caption', 403));

    if (!req.user._id) return next(new ErrorHandler('User is not authorized', 403));

    const currentEvent = await Event.findById(eventId);

    if (!currentEvent) return next(new ErrorHandler('Event not found', 404));

    const imageFile = req.file;

    if (!imageFile) return next(new ErrorHandler('Please upload an image', 403))

    const imageUrl = {
        public_id: imageFile.key,
        url: imageFile.location
    }

    const userEntryIndex = currentEvent.userEntry.findIndex(entry =>
        entry.user.toString() === req.user._id.toString()
    );

    if (userEntryIndex !== -1) {
        currentEvent.userEntry[userEntryIndex].entries.push({
            image: imageUrl,
            caption,
            likes: 0,
            likedBy:[]
        })
    } else {
        currentEvent.userEntry.push({
            user: req.user._id,
            entries: [{
                image: imageUrl,
                caption,
                likes: 0,
                likedBy:[]
            }]
        })
    }

    await currentEvent.save();


    const transformedData = await currentEvent.populate({
        path: 'userEntry.user',
        select: 'name _id'
    });

    res.status(200).json({
        success: true,
        message: 'Photo added successfully',
        event: transformedData
    });
};

const likeImage = async (req, res, next) => {
    try {
        const {id} = req.query;
        const {eid,uid} = req.params
       
        const event = await Event.findById(eid);
        if (!event) return next(new ErrorHandler('No Event found!', 404));

        const user = await User.findById(uid);
        if (!user) return next(new ErrorHandler('No user found', 404))

        const userEntry = event.userEntry.find(entry=>entry.user.toString()===uid);
        if (!userEntry) return next(new ErrorHandler('User has no entries in this event', 404));

        const imageEntry = userEntry.entries.find(entry=>entry._id.toString()===id)
        if (!imageEntry) return next(new ErrorHandler('Image not found',404));

        if(imageEntry.likedBy.includes(req.user._id)) return next(new ErrorHandler('Already liked the image',403))

        imageEntry.likes+=1;
        imageEntry.likedBy.push(req.user._id)

        await event.save()


        res.status(200).json({
            success: true,
            event
        })
    } catch (error) {
        console.log(error)
    }
}


export {
    createEvent,
    getAllEvents,
    specificEvent,
    fillDetails,
    myEvents,
    likeImage
}
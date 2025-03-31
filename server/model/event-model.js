import mongoose, { model, Schema, Types } from "mongoose";

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    creator: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    banner: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    userEntry: [
        {
            user: {
                type: Types.ObjectId,
                ref: 'User'
            },
            entries: [
                {
                    image:{
                        public_id: {
                            type: String,
                            required: true
                        },
                        url: {
                            type: String,
                            required: true
                        }
                    },
                    caption:{
                        type: String,
                        required: true
                    },
                    likes:{
                        type:Number,
                        default:0
                    },
                    likedBy:[
                        {
                            type:Types.ObjectId,
                            ref:"User"
                        }
                    ]
                }
            ],
        }
    ]
}, {
    timestamps: true
})

export const Event = mongoose.models.Event || model('Event', eventSchema)
import mongoose, { Schema, Types } from "mongoose";
import {hash} from 'bcryptjs'
import { model } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        select:false
    },
    designation:{
        type:String,
        enum:['Employee','Manager','Vice President','Assistant Vice President','President']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    createdEvent:[
        {
            type:Types.ObjectId,
            ref:'Event'
        }
    ]

},{
    timestamps:true
}
)
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next();
    this.password=await hash(this.password,10);
    next()
})

export const User = mongoose.models.User || model("User",userSchema);


import jwt from 'jsonwebtoken'
import {USER_TOKEN} from '../contant/contant.js'
import mongoose from 'mongoose';

const cookieOptions={
    maxAge:24*60*60*1000,
    sameSite:"none",
    httpOnly:true,
    secure:true
}
    
const sendToken = (res,user,statusCode,message)=>{
    
    const secretKey = process.env.SECRET_KEY;
    //console.log('this:',process.env.SECRET_KEY)
    const token = jwt.sign({_id:user._id},secretKey)

    res.status(statusCode).cookie(USER_TOKEN,token,cookieOptions).json({
        succes:true,
        user,
        message
    })
}

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI,{dbName:'PF'})
    .then((data)=>console.log(`Connected to DB:${data.connection.host}`))
    .catch((err)=>console.log(err))
}

export {
    sendToken,
    connectDB
}
import jwt from 'jsonwebtoken'
import { USER_TOKEN } from "../contant/contant.js";
import { ErrorHandler } from "../utility/utils.js";

const isAuthenticated = (req,res,next) =>{
    //console.log(req.cookies);

    const token = req.cookies[USER_TOKEN];

    if(!token) return next(new ErrorHandler('You need to login!',400));

    const secretKey = process.env.SECRET_KEY;

    if(!secretKey) return next(new ErrorHandler('Internal Server Error',500))

    const decodeData = jwt.verify(token,secretKey);
    //console.log(decodeData);

    req.user=decodeData;
    
    next()
}

export{
    isAuthenticated
}
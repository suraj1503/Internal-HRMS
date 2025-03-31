import {S3Client} from '@aws-sdk/client-s3'
import dotenv from 'dotenv'

dotenv.config()

const s3=new S3Client({
    region:process.env.AWS_REGION,
    credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY,
        secretAccessKey:process.env.AWS_SECRET_KEY
    },
})

const corsOption = {
    origin:["http://localhost:5173","http://localhost:5174"],
    credentials:true,
    methods:["GET","POST","PUT","DELETE"]
}

export {
    s3,
    corsOption
}

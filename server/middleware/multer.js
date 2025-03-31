import multer from 'multer'
import multerS3 from 'multer-s3'
import { s3 } from '../config/config.js'


const upload = multer({
    storage:multerS3({
        s3:s3,
        bucket:process.env.S3_BUCKET_NAME,
        metadata:function(req,file,cb){
            cb(null,{fileName:file.fieldname})
        },
        key:function(req,file,cb){
            cb(null,Date.now().toString()+'-'+file.originalname)
        }
    })
})


const banner = upload.single('banner')

const image=upload.single('image')

export {
    banner,
    image
}
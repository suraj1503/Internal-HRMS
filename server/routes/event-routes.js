import express from 'express'
import {createEvent,fillDetails,getAllEvents,likeImage,myEvents,specificEvent} from '../controller/event-controller.js'
import { isAuthenticated } from '../middleware/auth.js';
import { banner, image } from '../middleware/multer.js';

const router = express.Router()

router.use(isAuthenticated)

router.post('/new-event',banner,createEvent);

router.get('/all-events',getAllEvents)

router.get('/',specificEvent)

router.put('/upload',image,fillDetails)

router.get('/my-events',myEvents)

router.put('/:eid/user/:uid/entries',likeImage)

export default router
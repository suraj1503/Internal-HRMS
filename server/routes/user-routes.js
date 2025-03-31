import express from'express'
import { login,myProfile,register } from '../controller/user-controller.js';
import { isAuthenticated } from '../middleware/auth.js';

const router = express.Router()

router.post('/register',register);

router.post('/login',login)

router.use(isAuthenticated)

router.get('/my-profile',myProfile)

export default router
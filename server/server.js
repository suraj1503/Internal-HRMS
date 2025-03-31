import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

import cors from 'cors'
import cookieParser from 'cookie-parser'

import userRoutes from './routes/user-routes.js'
import eventRoutes from './routes/event-routes.js'
import { connectDB } from './utility/features.js'
import { errorMiddleware } from './middleware/error.js'
import { corsOption } from './config/config.js'


const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOption))

connectDB()

app.use('/api/v1/user',userRoutes)
app.use('/api/v1/event', eventRoutes)

app.use(errorMiddleware)

app.listen(PORT,() => {
    console.log(`Connected to server at port: ${PORT}`)
})
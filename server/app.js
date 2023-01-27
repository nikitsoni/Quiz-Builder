import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors';

import authRoutes from './routes/auth.js';
import createQuizRoutes from './routes/quiz.js';
import getQuizRoute from './routes/play.js';


dotenv.config()
const app = express()


// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))


// Routes
app.use("/auth", authRoutes);
app.use("/quiz", createQuizRoutes);
app.use("/", getQuizRoute);

// Database Connection

mongoose.set('strictQuery', true);
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true, 
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Running on ${PORT}`))
}).catch((error) => console.log(`${error} Did not Connect!`))


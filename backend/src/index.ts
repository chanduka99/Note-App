import bodyParser from "body-parser"
import { Request, Response } from "express"
import router from "./routes/router"
import mongoose from "mongoose"
import dotenv from 'dotenv';
import { errorHandler } from "./utils/errorHandler";
dotenv.config();






async function startServer() {
    const express = require('express')
    const app = express()
    const port = 4000

    //MongoDB configuration
    const db_username = process.env.MONGODB_USERNAME;
    const db_password = process.env.MONGODB_PASSWORD;
    const mongoDBURI = `mongodb+srv://${db_username}:${db_password}@cluster0.ji82ut2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    //Connect to MongoDB
    (await mongoose.connect(mongoDBURI));
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });

    app.use(bodyParser.json());
    app.use('/note-app', router)
    app.use(errorHandler); //error filter

    app.listen(port, () => {
        console.log(`NoteAppServer listening on port ${port}`)
    })

}

startServer();
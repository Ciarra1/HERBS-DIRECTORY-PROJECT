import express from "express";
import mongoose from "mongoose";
import { Herbs } from "./models/herbsModel.js";
import { PORT, mongoDBURL } from "./config.js";
import router from "./routes/herbsRoute.js";
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('HELLO')
})


app.use('/herbs', router);



mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
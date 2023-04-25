import express from 'express';
import mongoose from 'mongoose';
import {MongoClient as mongoClient} from "mongodb";
import router from "./router.js";


const PORT = 5000;
const DB_URL =
    `mongodb+srv://janbabickaf:porcur123@cluster0.qtinejw.mongodb.net/?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());
app.use('/api',router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        app.listen(PORT, () => console.log(`START ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

async function startAppMD() {
    try {
        await mongoClient.connect(DB_URL, {
                useNewUrlParser: true
            }
        );
        app.listen(PORT, () => console.log(`START ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

startApp();
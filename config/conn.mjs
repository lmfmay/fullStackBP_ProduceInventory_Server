import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const conectionString = process.env.mongoURI

async function connectDB(){
    try {
        //connect to db
        await mongoose.connect(conectionString)
        //console.log if connected
        console.log('Connects to MongoDB...')
    } catch (error) {
        console.error(error);
        process.exit(1) //stop allowing backdoor access to DB if connection fails
    }
}

export default connectDB;
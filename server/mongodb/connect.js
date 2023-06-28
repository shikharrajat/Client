import { connect } from "http2";
import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery' , true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;
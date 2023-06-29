import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectedDB from './mongodb/connect.js';
import PostRoutes from './Routes/PostRoutes.js';
import DalleRoutes from './Routes/DalleRoutes.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit : '50 mb'}));
app.use('/api/v1/post', PostRoutes);
app.use('/api/v1/dalle', DalleRoutes);

app.get('/', async(req,res) => {
    res.send('Hello from Imag-E!');
})

const startServer = async () => {
    try {
        connectedDB(process.env.MONGODB_URL);
        app.listen(() => console.log('Server has started on port https://imageverse-zus3.onrender.com')) 
    } catch (error) {
         console.log(error);
    }
}

startServer();
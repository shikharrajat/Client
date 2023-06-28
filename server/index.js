import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectedDB from './mongodb/connect.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit : '50 mb'}));

app.get('/', async(req,res) => {
    res.send('Hello from Imag-E!');
})

const startServer = async () => {
    try {
        connectedDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server has started on port http://localhost:8080')) 
    } catch (error) {
         console.log(error);
    }
}

startServer();
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import sequelize from './config/database.ts';
import { User } from './models/User.ts';
const app = express();



const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to DB successful');
        await User.sync({ force: false });
        await sequelize.sync({ force: false });
    } catch (error) {
        console.log('Failed to connect to database', error);
    }
}

connectDB();

const port = process.env.PORT || 3000;
app.use(cors({ origin: 'http://localhost:5173' }));


app.get('/', (req, res) => {

    const data = {
        message: 'Hello from the API!',
        version: '1.0',
        items: ['apple', 'banana', 'orange']
    };

    res.json(data);
});


app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});
require('dotenv').config();
const express = require('express');
const cors= require('cors');
const { userRouter } = require('./routes/userRoutes');
const { ConnectionDb } = require('./config/dbConnection');



const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/v1/', userRouter)

app.listen(process.env.PORT, async () => {

await ConnectionDb()
    console.log(` listening on ${process.env.PORT}`)
})
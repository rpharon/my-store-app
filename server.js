require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));

mongoose.connect(process.env.DATABASE_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

//to let server accepts json
app.use(express.json())

const myStoreRouters = require('./routes/api/stores')
app.use('/api/stores', myStoreRouters)
app.listen(5000, () => console.log('Server started'))
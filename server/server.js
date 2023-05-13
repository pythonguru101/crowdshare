// node express application boiler plate 
// 1. import express

const express = require('express');
const app = express();

// 2. import mongoose
const mongoose = require('mongoose');

// 3. import body-parser
const bodyParser = require('body-parser');

// 4. import cors
const cors = require('cors');

// 5. import dotenv
require('dotenv').config();

// 6. import routes
const userRoutes = require('./routes/user.route')

// 7. use body-parser
app.use(bodyParser.json());

// 8. use cors
app.use(cors());

// 9. use routes
app.use('/users', userRoutes);

// 10. connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log('connected to db');
}
);

// 11. start listening to the server
app.listen(3000);



const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

//Import Route
const UserRouter = require('./routes/UserRoute');
const BarangRouter = require('./routes/barangRoute')

//Connect to db
mongoose.connect('mongodb+srv://akiyamanico:HQrX6GKuuthPWz7D@cluster0.16bgzli.mongodb.net/');

const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to Mongoose'));

app.use(cors());
app.use(express.json()); 

app.use('/api/users', UserRouter);
app.use('/api/barang', BarangRouter);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

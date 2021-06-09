const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true,  useUnifiedTopology: true})
.then(() => console.log('DB connected'));


mongoose.connection.on("error", err => {
	console.log('DB connection error: ${err.message}');
});

const postRoutes = require("./routes/post");


app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());

app.use("/", postRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {console.log('a node js api is listening.. ${port}')});


// // import mongoose
// const mongoose = require('mongoose');
// // load env variables
// const dotenv = require('dotenv');
// dotenv.config()
 
// //db connection
// mongoose.connect(
//   process.env.MONGO_URI,
//   {useNewUrlParser: true, useUnifiedTopology: true }
// )
// .then(() => console.log('DB Connected'))
 
// mongoose.connection.on('error', err => {
//   console.log(`DB connection error: ${err.message}`)
// });

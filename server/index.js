const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const dotenv = require('dotenv');

// routes
const postRouter = require('./routes/postRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const imageUploadRoutes = require('./routes/image-upload');

const app = express();

dotenv.config({
  path: './config.env'
});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

require('./models/cloudinary-image');

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log('DB Connection successfull!'));

// Middleware
//Handle CORS errors
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

//Routes
app.use('/posts', postRouter);
app.use('/categories', categoryRouter);
app.use('/image-upload', imageUploadRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
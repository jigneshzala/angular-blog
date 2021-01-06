const express = require('express');
const mongoose = require('mongoose');

const dotenv = require('dotenv');

const app = express();

dotenv.config({
  path: './config.env'

});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log('DB Connection successfull!'));


const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

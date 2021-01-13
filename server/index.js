const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config');
const path = require('path');
const cors = require("cors");

const dotenv = require('dotenv');
const {
  provideErrorHandler
} = require('./middlewares');

// routes
const postRouter = require('./routes/postRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const imageUploadRoutes = require('./routes/image-upload');
const usersRoutes = require('./routes/users');
const mediaRoutes = require('./routes/mediaRoutes');

const app = express();

dotenv.config({
  path: './config.env'
});

// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

require('./models/cloudinary-image');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
}).then(() => console.log('DB Connection successfull!'));

// Middleware
//Handle CORS errors
app.use(cors());
app.use(bodyParser.json());
app.use(provideErrorHandler);

const PORT = process.env.PORT || 3000;

//Routes
app.use('/api/v1/posts', postRouter);
app.use('/api/v1/categories', categoryRouter);
app.use('/api/v1/image-upload', imageUploadRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/images', mediaRoutes);

if (process.env.NODE_ENV === 'production') {
  const distPath = path.join(__dirname, '..', 'dist');
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    return res.sendFile(path.resolve(distPath, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}...`);
});

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'CloudinaryImage'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  active: {
    type: Boolean
  }
});


const Post = mongoose.model('Post', postSchema);


module.exports = Post;

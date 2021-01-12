const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    trim: true
  },
  html: {
    type: String,
    required: true
  },
  excerpt: {
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
  meta_description: {
    type: String,
    required: true
  },
  meta_title: {
    type: String,
    required: true
  },
  feature_image: {
    type: Schema.Types.ObjectId,
    ref: 'CloudinaryImage'
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  },
  published_at: {
    type: Date,
    default: Date.now()
  },
  
  active: {
    type: Boolean,
    default: false
  }
});


const Post = mongoose.model('Post', postSchema);


module.exports = Post;

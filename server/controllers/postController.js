const mongoose = require('mongoose');
const Post = require('./../models/postModel');

exports.allBlogPost = async (req, res) => {
  try {

    const {
      category
    } = req.query;

    const query = category ? {
      category: category.toLowerCase()
    } : {};

    const posts = await Post.find(query).populate('image');

    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
}


exports.addBlogPost = async (req, res) => {
  try {
    const postData = req.body;

    /*  const post = new Post({
       title: req.body.title,
       content: req.body.content,
       category: req.body.category,
       author: req.body.author
     }); */

    const post = new Post(postData);

    let newPost = await post.save();
    res.status(201).json({
      data: newPost
    });

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

exports.deleteBlogPost = async (req, res) => {
  try {

    const id = req.params.postId;
    const result = await Post.remove({
      _id: id
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

exports.updateBlogPost = async (req, res) => {
  try {
    const id = req.params.postId;
    const result = await Post.findByIdAndUpdate(id, req.body);
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

exports.getPostById = async (req, res) => {
  try {
    const id = req.params.postId;
    const result = await Post.findById(id);
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

const mongoose = require('mongoose');
const Post = require('./../models/postModel');

exports.allBlogPost = async (req, res) => {
  try {

    // BUILD QUERY
    const queryObj = {
      ...req.query
    };

    const excludedFields = ['page', 'sort', 'limit', 'fields'];

    excludedFields.forEach(el => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);

    let query = Post.find(JSON.parse(queryStr));

    // Pagination
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    const skip = (page - 1) * limit;

    //page=2&limit=10
    query = query.skip(skip).limit(limit);

    if (req.query.page) {
      const numPosts = await Post.countDocuments();
      if (skip >= numPosts) throw new Error('This page does not exist');

    }

    // EXECUTE QUERY
    const posts = await query;

    //const posts = await Post.find(queryObj).populate('image');

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts
      }
    });
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
    const result = await Post.findByIdAndDelete(id);
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
    const result = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    });
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
    const result = await Post.findById(id).populate('image');
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}
exports.getPostBySlug = async (req, res) => {
  try {
    const slug = req.params.slug;
    const result = await Post.findOne({
      slug
    }).populate('image');
    res.status(200).json(result);

  } catch (err) {
    res.status(500).json({
      error: err
    });
  }
}

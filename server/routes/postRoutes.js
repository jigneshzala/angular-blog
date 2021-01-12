const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get("/", postController.allBlogPost);
router.get("/post/:slug", postController.getPostBySlug);
router.get("/:postId", postController.getPostById);
router.post("/", postController.addBlogPost);
router.delete("/:postId", postController.deleteBlogPost);
router.patch("/:postId", postController.updateBlogPost);


module.exports = router;

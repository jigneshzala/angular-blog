const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get("/", postController.allBlogPost);
router.post("/", postController.addBlogPost);
router.delete("/:postId", postController.deleteBlogPost);
router.patch("/:postId", postController.updateBlogPost);


module.exports = router;

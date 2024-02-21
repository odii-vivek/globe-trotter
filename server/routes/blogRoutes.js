const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Routes for packages
router.post('/post', blogController.postBlog);
router.get('/get', blogController.fetchAllBlogs);
router.post('/guideblogs' , blogController.fetchGuideBlogs);

module.exports = router;

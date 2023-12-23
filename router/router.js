const express = require('express');
const router = express.Router();
const PostController = require('../controller/PostController');
const ProductController = require('../controller/ProductController');
const UserController = require('../controller/UserCotroller');

router.post('/addProduct' ,ProductController.addProduct);
router.get('/post' , PostController.post);
router.post('/SignUp' , UserController.SignUp);
;router.post('/login' , UserController.login)

module.exports = router;
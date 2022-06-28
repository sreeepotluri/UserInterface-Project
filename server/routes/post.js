// 1. import any needed libraries
const express = require("express");
const User = require('../models/post'); //accesses functions in post model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/create', async (req, res) => {
    try {
      const post = await Post.createPost(req.body.postId);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/read', async (req, res) => {
    try {
      const post = await Post.readPost(req.body.postId);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .post('/update', async (req, res) => {
    try {
      const post = await Post.updatePost(req.body.postId);
      res.send({...post});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/delete', async (req, res) => {
    try {
      await Post.deletePost(req.body.postId);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;
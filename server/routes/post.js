// 1. import any needed libraries
const express = require("express");
const User = require('../models/post'); //accesses functions in post model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/create', async (req, res) => {
    try {
      const post = await Post.create(req.body.postId);
      res.send({...post, postId: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/read', async (req, res) => {
    try {
      const post = await Post.read(req.body.postId);
      res.send({...post, postId: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Post.delete(req.body.postId);
      res.send({ success: "Post deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;
// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const postSchema = new mongoose.Schema({
  postId: { type: String, unique: true, required: true},
})

// 3. create model of schema
const Post = mongoose.model("Post", postSchema);

// 4. create CRUD functions on model
//CREATE a POST
async function createPost(postId) {
  const post = await getPost(postId);
  if(post) throw Error('post already created');

  const newPost = await Post.create({
    
    postId: postId
  });
    
  return newPost;
}

// READ a POST
async function readPost(postId) {
  const post = await getPost(postId);
  if(!post) throw Error('Post not found');
  if(user.postId != postId) throw Error('Wrong Post created');

  return post;
}

// UPDATE POST
async function updatePost(postId) {
  const post = await post.updateOne({"_id": id}, {$set: { postId: postId}});
  return post;
}

//DELETE POST
async function deletePost(postId) {
  await Post.deleteOne({"_id": id});
};

// 5. export all functions we want to access in route files
module.exports = { 
  updatePost, deletePost, createPost, readPost
};
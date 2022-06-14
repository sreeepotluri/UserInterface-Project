// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const groupSchema = new mongoose.Schema({
  groupId: { type: String, unique: true, required: true},
})

// 3. create model of schema
const Group = mongoose.model("Group", groupSchema);

// 4. create CRUD functions on model
//CREATE a GROUP
async function createGroup(groupId) {
  const group = await getGroup(groupId);
  if(group) throw Error('Groupname already in exists');

  const newGroup = await Group.create({
    groupId: groupId
  });
    
  return newGroup;
}


async function updatePassword(id, password) {
  const user = await User.updateOne({"_id": id}, {$set: { password: password}});
  return user;
}

//DELETE GROUP
async function deleteGroup(groupId) {
  await Group.deleteOne
  return group;
}


// 5. export all functions we want to access in route files
module.exports = { 
 createGroup, deleteGroup
};
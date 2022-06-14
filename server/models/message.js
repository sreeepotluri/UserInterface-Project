// 1. import mongoose
const mongoose = require("mongoose");

// 2. create schema for entity
const messageSchema = new mongoose.Schema({
  messageId: { type: String, unique: true, required: true},
})

// 3. create model of schema
const User = mongoose.model("User", userSchema);

// 4. create CRUD functions on model
//Send a message
async function sendMessage(messageId) {
  const message = await getMessage(messageId);
  if(message) throw Error('message already sent');

  const newMessage = await Message.sent({
    messageId: messageId
  });
    
  return newMessage;
}

// READ a Message
async function readMessage(messageId) {
  const message = await getMessage(messageId);
  if(!message) throw Error('message not read');
  if(message.messageId != messageId) throw Error('Wrong message sent');

  return message;
}

//DELETE MESSAGE
async function deleteMessage(messageId) {
  await Message.deleteOne({"_id": id});
};

// 5. export all functions we want to access in route files
module.exports = { 
  sendMessage, deleteMessage, readMessage, 
};
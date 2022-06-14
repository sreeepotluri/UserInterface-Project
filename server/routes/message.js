// 1. import any needed libraries
const express = require("express");
const User = require('../models/message'); //accesses functions in message model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/send', async (req, res) => {
    try {
      const message = await Message.send(req.body.messageId);
      res.send({...message, messageId: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/read', async (req, res) => {
    try {
      const message = await Message.read(req.body.messageId);
      res.send({...message, messageId: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await messageId.deleteMessage(req.body.messageId);
      res.send({ success: "Message deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;
// 1. import any needed libraries
const express = require("express");
const User = require('../models/user'); //accesses functions in user model file
const router = express.Router();

// 2. create all routes to access database
router
  .post('/create', async (req, res) => {
    try {
      const group = await Group.create(req.body.groupId);
      res.send({...group, groupId: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/delete', async (req, res) => {
    try {
      await Group.delete(req.body.groupId);
      res.send({ success: "Group deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

// 3. export router for use in index.js
module.exports = router;
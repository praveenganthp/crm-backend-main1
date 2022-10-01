const express = require("express");
const router = express.Router();

const messageService = require("../services/message.service");

// READ
router.get("/", async (req, res) => {
  const posts = await messageService.getPosts();
  res.send(posts);
});

// READ
router.get("/:id", async (req, res) => {
  const posts = await messageService.getPost(req.params.id);
  res.send(posts);
});

// CREATE
router.post("/", async (req, res) => {
  // req.body => Body data
  const post = await messageService.createPost(req.body);
  res.send(post);
});

// UPDATE
router.put("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await messageService.updatePost(req.params.id, req.body);
  res.send(post);
});

// DELETE
router.delete("/:id", async (req, res) => {
  // req.params => URL Parameters
  const post = await messageService.deletePost(req.params.id);
  res.send(post);
});

module.exports = router;

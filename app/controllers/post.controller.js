/** load required packages */

/** load peer modules and services */
const { PostService } = require("../service/post.service");

/**
 * PostController contains definitions of all route handlers in /post namespace.
 */

/**
 * each member function of controller is attached to each route
 */
module.exports.getAllPosts = async (req, res) => {
  try {
    const postList = await PostService.findAllPosts();

    res.status(200).json(postList);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

module.exports.getOnePost = async (req, res) => {
  try {
    const post = await PostService.findPost(req.params.id);
    if (!post) {
      res.status(404).json({ Error: "No post found" });
    }
    res.status(200).json(post);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

module.exports.register = async (req, res) => {
  try {
    const post = await PostService.registerPost(req.body);
    if (!post) {
      res.status(404).json({ Error: "No post found" });
    }
    res.status(200).json(post);
  } catch (e) {
    if (e.message.includes("E11000 duplicate key error")) {
      res.status(409).json({ Error: "Expected unique value, got duplicate" });
    }
    res.status(400).json({ Error: e.message });
  }
};

module.exports.update = async (req, res) => {
  try {
    const { id, ...obj } = req.body;
    const post = await PostService.updatePost(id, obj);
    if (!post) {
      res.status(404).json({ Error: "No post found" });
    }
    res.status(200).json(post);
  } catch (e) {
    if (e.message.includes("E11000 duplicate key error")) {
      res.status(409).json({ Error: "Expected unique value, got duplicate" });
    }
    res.status(400).json({ Error: e.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const post = await PostService.deletePost(req.params.id);
    if (!post) {
      res.status(404).json({ Error: "No post found" });
    }
    res.status(200).json(post);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

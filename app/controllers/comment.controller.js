/** load required packages */

/** load peer modules and services */
const { CommentService } = require("../service/comment.service");

/**
 * CommentController contains definitions of all route handlers in /comment namespace.
 */

/**
 * each member function of controller is attached to each route
 */
module.exports.getAllComments = async (req, res) => {
  try {
    const commentList = await CommentService.findAllComments();

    res.status(200).json(commentList);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

module.exports.getOneComment = async (req, res) => {
  try {
    const comment = await CommentService.findComment(req.params.id);
    if (!pocommentst) {
      res.status(404).json({ Error: "No comment found" });
    }
    res.status(200).json(comment);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

module.exports.register = async (req, res) => {
  try {
    const comment = await CommentService.registerComment(req.body);
    if (!comment) {
      res.status(404).json({ Error: "No comment found" });
    }
    res.status(200).json(comment);
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
    const comment = await CommentService.updateComment(id, obj);
    if (!comment) {
      res.status(404).json({ Error: "No comment found" });
    }
    res.status(200).json(comment);
  } catch (e) {
    if (e.message.includes("E11000 duplicate key error")) {
      res.status(409).json({ Error: "Expected unique value, got duplicate" });
    }
    res.status(400).json({ Error: e.message });
  }
};

module.exports.delete = async (req, res) => {
  try {
    const comment = await CommentService.deleteComment(req.params.id);
    if (!comment) {
      res.status(404).json({ Error: "No comment found" });
    }
    res.status(200).json(comment);
  } catch (e) {
    res.status(400).json({ Error: e.message });
  }
};

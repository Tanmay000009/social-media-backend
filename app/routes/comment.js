const express = require("express");

const router = express.Router();

/** load the service */
const CommentController = require("../controllers/comment.controller");

/** to list all comments */
router.get("/", CommentController.getAllComments);

/** to list specific comment */
router.get("/:id", CommentController.getOneComment);

/** to register a comment */
router.post("/", CommentController.register);

/** to update a comment */
router.put("/", CommentController.update);

/** to delete a comment */
router.delete("/:id", CommentController.delete);

/** export the routes to be binded to application */
module.exports = router;

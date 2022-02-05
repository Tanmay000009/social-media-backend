const express = require("express");

const router = express.Router();

/** load the service */
const PostController = require("../controllers/post.controller");

/** to list all posts */
router.get("/", PostController.getAllPosts);

/** to list specific post */
router.get("/:id", PostController.getOnePost);

/** to register a post */
router.post("/", PostController.register);

/** to update a post */
router.put("/", PostController.update);

/** to delete a post */
router.delete("/:id", PostController.delete);

/** export the routes to be binded to application */
module.exports = router;

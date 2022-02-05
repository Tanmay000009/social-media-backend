/** load required packages */

/** load peer modules and services */
const Comment = require("../models/comment");

/**
 * CommentService operates on the data layer of the application, and performs *all* db operations.
 *
 * CommentService is consumed not only by CommentController, but also by controllers of other modules.
 */
class CommentService {
  /**
   * Fetch all comment details
   * @returns Array<Comment> list of comments in the system
   */
  static async findAllComments() {
    const commentList = await Comment.find({});
    return commentList;
  }

  /**
   * Fetch comment details using id
   * @returns single comment in the system
   */
  static async findComment(id) {
    const comment = await Comment.findById(id);
    return comment;
  }

  /**
   * Create/Register a new comment
   * @returns the created comment in the system
   */
  static async registerComment(body) {
    const { content, post } = body;
    const comment = new Comment({
      content,
      post,
    });
    const newComment = await comment.save();
    console.log(newComment);
    return newComment;
  }

  /**
   * Updates the comment details
   * @returns the updated comment
   */
  static async updateComment(commentId, obj) {
    var comment = null;
    await Comment.findByIdAndUpdate(commentId, obj).then((updatedComment) => {
      comment = updatedComment;
    });
    return comment;
  }

  /**
   * Deletes the comment
   */
  static async deleteComment(id) {
    const comment = await Comment.findByIdAndDelete(id);
    return comment;
  }
}

module.exports = { CommentService };

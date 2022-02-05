/** load required packages */

/** load peer modules and services */
const Post = require("../models/post");

/**
 * PostService operates on the data layer of the application, and performs *all* db operations.
 *
 * PostService is consumed not only by PostController, but also by controllers of other modules.
 */
class PostService {
  /**
   * Fetch all post details
   * @returns Array<Post> list of posts in the system
   */
  static async findAllPosts() {
    const postList = await Post.find({});
    return postList;
  }

  /**
   * Fetch post details using id
   * @returns single post in the system
   */
  static async findPost(id) {
    const post = await Post.findById(id);
    return post;
  }

  /**
   * Create/Register a new post
   * @returns the created Post in the system
   */
  static async registerPost(body) {
    const { contentURL, caption, comments, likes } = body;
    const post = new Post({
      contentURL,
      caption,
      comments,
      likes,
    });
    const newPost = await post.save();
    console.log(newPost);
    return newPost;
  }

  /**
   * Updates the post details
   * @returns the updated post
   */
  static async updatePost(postId, obj) {
    var post = null;
    await Post.findByIdAndUpdate(postId, obj).then((updatedPost) => {
      post = updatedPost;
    });
    return post;
  }

  /**
   * Deletes the post
   */
  static async deletePost(id) {
    const post = await Post.findByIdAndDelete(id);
    return post;
  }
}

module.exports = { PostService };

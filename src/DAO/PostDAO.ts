import { Post } from "../models/Post";

export default interface PostDAO {
  // getAllPosts returns an array of all posts
  getAllPosts: () => Promise<Post[]>;
}

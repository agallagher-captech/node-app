import { Post } from "../models/Post";

export default interface PostService {
    //specify methods
    getAllPosts: () => Promise<Post[]>;
  }
  
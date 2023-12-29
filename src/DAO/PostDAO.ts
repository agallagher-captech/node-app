import { Post } from "@prisma/client";

export default interface PostDAO {
  // getAllPosts returns an array of all posts
  getAllPosts: () => Promise<Post[]>;
  createPost: (username: string, content: string) => Promise<Post>;
  getPostByID: (postID: number) => Promise<Post | null>;
  updatePostByID: (postID: number, username: string, content: string) => Promise<Post | null>;
  deletePostByID: (postID: number) => Promise<Post | null>;
}

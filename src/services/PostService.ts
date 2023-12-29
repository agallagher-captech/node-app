import { Post } from "@prisma/client";

export default interface PostService {
    //specify methods
    getAllPosts: () => Promise<Post[]>;
    createPost: (username: string, content: string) => Promise<Post>;
  }
  
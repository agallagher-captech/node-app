import { Post } from "@prisma/client";
import PostDAO from "../../DAO/PostDAO";
import { PostDAOImplSingleton } from "../../DAO/impl/PostDAOImpl";
import PostService from "../PostService";


export class PostServiceImpl implements PostService {
  // add dao in constructor like how TestService
  constructor(private postDAO: PostDAO = PostDAOImplSingleton) {}
  async getAllPosts(): Promise<Post[]> {
    return this.postDAO.getAllPosts()
  }

  async createPost(username: string, content: string): Promise<Post> {
    return this.postDAO.createPost(username, content)
  }

  async getPostByID(postID: number): Promise<Post | null> {
    return this.postDAO.getPostByID(postID)
  }

  async updatePostByID(postID: number, username: string, content: string): Promise<Post | null> {
    // check that post exists
    const post = await this.postDAO.getPostByID(postID)
    if (post == null) { return null }
    return this.postDAO.updatePostByID(postID, username, content)
  }

  async deletePostByID(postID: number): Promise<Post | null> {
    // check that post exists
    const post = await this.postDAO.getPostByID(postID)
    if (post == null) { return null }
    return this.postDAO.deletePostByID(postID)
  }
}

export const PostServiceImplSingleton = new PostServiceImpl();

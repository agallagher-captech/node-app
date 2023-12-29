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
}

export const PostServiceImplSingleton = new PostServiceImpl();

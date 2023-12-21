// import { Post } from "@prisma/client";
import PostDAO from "../../DAO/PostDAO";
import { PostDAOImplSingleton } from "../../DAO/impl/PostDAOImpl";
import { Post } from "../../models/Post";
import PostService from "../postService";


export class PostServiceImpl implements PostService {
  // add dao in constructor like how TestService
  constructor(private postDAO: PostDAO = PostDAOImplSingleton) {}
  async getAllPosts(): Promise<Post[]> {
    return this.postDAO.getAllPosts()
  }
}

export const PostServiceImplSingleton = new PostServiceImpl();

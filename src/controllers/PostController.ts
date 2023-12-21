import { Request, Response } from "express";
import { PostServiceImplSingleton } from "../services/impl/PostServiceImpl";
import PostService from "../services/postService";

export default class PostController {
  constructor(private postService: PostService = PostServiceImplSingleton) {}

  public async getAllPosts(req: Request, res: Response) {
    const result = await this.postService.getAllPosts();
    console.log("post controller hit")
    console.log(result);
    res.status(200).json({ result });
  }
}

export const PostControllerSingleton = new PostController();

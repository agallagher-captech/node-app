import { Request, Response } from "express";
import { PostServiceImplSingleton } from "../services/impl/PostServiceImpl";
import PostService from "../services/PostService";
import TestService from "../services/TestService";
import { TestServiceImplSingleton } from "../services/impl/TestServiceImpl";

export default class Controller {
  constructor(private postService: PostService = PostServiceImplSingleton, private testService: TestService = TestServiceImplSingleton) {}

  public async getAllPosts(req: Request, res: Response) {
    const result = await this.postService.getAllPosts();
    console.log(result);
    res.status(200).json({ result });
  }

  public async createPost(req: Request, res: Response) {
    const username = req.body.username
    const content = req.body.content
    const result = await this.postService.createPost(username, content);
    console.log(result);
    res.status(200).json({ result });
  }

  public async getPostByID(req: Request, res: Response) {
    const postID = parseInt(req.params.postID)
    const result = await this.postService.getPostByID(postID);
    console.log(result);
    res.status(200).json({ result });
  }

  public async updatePostByID(req: Request, res: Response) {
    const postID = parseInt(req.params.postID)
    const username = req.body.username
    const content = req.body.content
    const result = await this.postService.updatePostByID(postID, username, content);
    console.log(result);
    res.status(200).json({ result });
  }

  public async deletePostByID(req: Request, res: Response) {
    const postID = parseInt(req.params.postID)
    const result = await this.postService.deletePostByID(postID);
    console.log(result);
    res.status(200).json({ result });
  }
}

export const ControllerSingleton = new Controller();

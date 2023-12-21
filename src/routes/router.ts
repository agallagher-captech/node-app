import { Router, Request, Response } from "express";
import { PostControllerSingleton } from "../controllers/PostController";
const router = Router();

router.get("/posts", (req: Request, res: Response) =>
  PostControllerSingleton.getAllPosts(req, res)
);

export default router;

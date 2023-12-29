import { Router, Request, Response } from "express";
import { ControllerSingleton } from "../controllers/Controller";
const router = Router();

// POSTS
router.get("/posts", (req: Request, res: Response) =>
  ControllerSingleton.getAllPosts(req, res)
);
router.post("/posts", (req: Request, res: Response) =>
  ControllerSingleton.createPost(req, res)
);
export default router;

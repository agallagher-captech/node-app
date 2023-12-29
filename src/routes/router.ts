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
router.get("/posts/:postID", (req: Request, res: Response) =>
  ControllerSingleton.getPostByID(req, res)
);
router.put("/posts/:postID", (req: Request, res: Response) =>
  ControllerSingleton.updatePostByID(req, res)
);
router.delete("/posts/:postID", (req: Request, res: Response) =>
  ControllerSingleton.deletePostByID(req, res)
);
export default router;

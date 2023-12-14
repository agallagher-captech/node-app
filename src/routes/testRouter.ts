import { Router,  Request, Response  } from 'express';
import { TestControllerSingleton } from '../controllers/TestController';
const router = Router();

router.get('/test/:num', (req: Request, res: Response) => TestControllerSingleton.testMethod(req, res));

export default router
import { Request, Response  } from 'express';
import TestService from '../services/TestService';
import { TestServiceImplSingleton } from '../services/impl/TestServiceImpl';

export default class TestController {
    constructor(private testService: TestService = TestServiceImplSingleton) {}

    public testMethod(req: Request, res: Response) {
        const num = parseInt(req.params.num) ?? 0
        const result = this.testService.addWithTen(num)
        res.status(200).json({result});
    }
}

export const TestControllerSingleton = new TestController()
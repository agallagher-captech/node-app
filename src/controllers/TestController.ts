import { Request, Response  } from 'express';
import TestService from '../services/TestService';
import { TestServiceImplSingleton } from '../services/impl/TestServiceImpl';

export default class TestController {
    constructor(private testService: TestService = TestServiceImplSingleton) {}

    public async testMethod(req: Request, res: Response) {
        const num = parseInt(req.params.num) ?? 0
        const result = await this.testService.addWithNumber(num)
        console.log(result)
        res.status(200).json({result});
    }
}

export const TestControllerSingleton = new TestController()
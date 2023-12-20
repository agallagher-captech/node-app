import TestDAO from '../../testDao.ts/TestDao'
import { TestDAOImplSingleton } from '../../testDao.ts/impl/TestDaoImpl'
import TestService from '../TestService'
import { myNumber } from '../../testDao.ts/impl/TestDaoImpl'

class TestServiceImpl implements TestService {
    // add dao in constructor like how TestService
    constructor(private testDao: TestDAO = TestDAOImplSingleton){}
    async addWithNumber(numberToAdd: number): Promise<number | undefined> {
        const num = await this.testDao.getNumber()
        if (num) {
            return num.number + numberToAdd
        }

        return undefined
    }
}

export const TestServiceImplSingleton = new TestServiceImpl()
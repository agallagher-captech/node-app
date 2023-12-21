import TestDAO from "../../DAO/TestDAO";
import { TestDAOImplSingleton } from "../../DAO/impl/TestDAOImpl";
import TestService from "../TestService";

export class TestServiceImpl implements TestService {
  // add dao in constructor like how TestService
  constructor(private testDAO: TestDAO = TestDAOImplSingleton) {}
  async addWithNumber(numberToAdd: number): Promise<number | undefined> {
    const num = await this.testDAO.getNumber();
    if (num) {
      return num.number + numberToAdd;
    }

    return undefined;
  }
}

export const TestServiceImplSingleton = new TestServiceImpl();

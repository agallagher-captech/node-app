// import supertest from 'supertest';
import { expect, jest } from "@jest/globals";
import { TestServiceImpl } from "./TestServiceImpl";
// import TestDAOImpl, { TestDAOImplSingleton } from "../../DAO/impl/TestDAOImpl";
import TestDAO from "../../DAO/TestDAO"
import { myNumber } from "../../models/myNumber";

const mockTestDAO: TestDAO = {
    getNumber: jest.fn<() => Promise<myNumber | null >>().mockResolvedValue({id: 1, number: 5})
}

describe("test a test", () => {
  // TODO: clearAllMocks vs. resetAllMocks
  afterEach(jest.clearAllMocks);

  it("adds the two numbers", async () => {
    // Arrange
    // TODO: replace DAO singleton with a mock
    const service = new TestServiceImpl(mockTestDAO);

    // Act
    const result = await service.addWithNumber(10);
    console.log(result);

    // Assert
    expect(result).toBe(15);
    expect(mockTestDAO.getNumber).toHaveBeenCalledTimes(1);
    expect(mockTestDAO.getNumber).toHaveBeenCalledWith();
  });
});

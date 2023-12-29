// import { PrismaClient } from '@prisma/client'
import TestDAOImpl from './TestDAOImpl'
import { MockContext, createMockContext } from './context'

let mockCtx: MockContext
// let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
//   ctx = mockCtx as unknown as Context
})

describe("sample DAO unit tests", () => {
    // beforeEach(() => {
    //     mockCtx = createMockContext()
    //     ctx = mockCtx as unknown as Context
    // })

    // afterEach(jest.clearAllMocks)
    it("gets the number from the database", async () => {
        // Arrange
        mockCtx.prisma.number.findUnique.mockResolvedValue({id: 2, number: 2})
        // mockCtx.prisma.number.findUnique.mockImplementation( () => {
        //     const num: myNumber = {
        //         id: 1,
        //         number: 2
        //     }
        //     return Promise.resolve(num)
        // })
        const dao = new TestDAOImpl(mockCtx.prisma)

        // Act
        const result = await dao.getNumber()

        // Assert
        expect(result).toEqual({id: 2, number: 2})
        expect(mockCtx.prisma.number.findUnique).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.number.findUnique).toHaveBeenCalledWith({"where": {"id": 2}})
    })
})

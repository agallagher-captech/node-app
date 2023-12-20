import TestDAO from '../TestDao'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
// normally add to models folder
export type myNumber = {
    id: number;
    number: number;
}

class TestDAOImpl implements TestDAO {
    // TODO: add prisma client as dependency injection
    constructor(){}
    async getNumber(): Promise<myNumber | null> {
        return prisma.number.findUnique({
            where: {
                id: 2
            },
        })
    }
}

export const TestDAOImplSingleton = new TestDAOImpl()
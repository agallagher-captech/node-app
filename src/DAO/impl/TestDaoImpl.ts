import { myNumber } from '../../models/myNumber';
import TestDAO from '../TestDao'
import { PrismaClient } from "@prisma/client";
class TestDAOImpl implements TestDAO {
    constructor(private db: PrismaClient = new PrismaClient() ){}
    async getNumber(): Promise<myNumber | null> {
        return this.db.number.findUnique({
            where: {
                id: 2
            },
        })
    }
}

export const TestDAOImplSingleton = new TestDAOImpl()

import TestService from '../TestService'

class TestServiceImpl implements TestService {
    constructor(){}
    addWithTen(numberToAdd: number): number {
        return numberToAdd + 10
    }
}

export const TestServiceImplSingleton = new TestServiceImpl()
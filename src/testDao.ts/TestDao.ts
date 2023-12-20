import { myNumber } from "./impl/TestDaoImpl";

export default interface TestDAO {
    //specify methods
    getNumber: () => Promise<myNumber | null>
}
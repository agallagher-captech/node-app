import { myNumber } from "../models/myNumber";

export default interface TestDAO {
    //specify methods
    getNumber: () => Promise<myNumber | null>
}
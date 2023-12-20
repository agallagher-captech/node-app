export default interface TestService {
    //specify methods
    addWithNumber: (numberToAdd: number) => Promise<number | undefined> 
}
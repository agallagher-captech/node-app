import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routes/router";
import bodyParser from "body-parser"
dotenv.config();

export const app: Express = express();
const port = process.env.PORT;
app.use(bodyParser.json())
app.use("/", router);

// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server Now With TypeScript!');
// });

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

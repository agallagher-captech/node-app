import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/testRouter';
dotenv.config();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export const app: Express = express();
const port = process.env.PORT;
app.use('/', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server Now With TypeScript!');
});

app.post('/users/', async (req: Request, res: Response) => {
  const newUser = await prisma.user.create({
    data: {
      // TODO: add check for email uniqueness and remove Math.random()
      email: "hello@herewecode.io" + Math.random(),
      username: "gaelgthomas",
    },
  })

  console.log("new user: ");
  console.log(newUser);

  res.send(newUser);
});

app.get('/users', async (req: Request, res: Response) => {
  let users = prisma.user.findMany;
  
  res.send(users.toString());
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

// TODO: close the database on shutdown
// db.close((err: Error) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Close the database connection.');
// });
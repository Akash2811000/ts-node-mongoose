import express, { Express, Request, Response } from 'express';
const app: Express = express();
import mongoose from 'mongoose';
const connection = mongoose.connect('mongodb://localhost:27017/mytsdata');
import {router} from './controller/student_controller'


app.use(express.json());
app.use('/students',router);
app.get('/', (req: Request, res: Response) => {

res.send('Express + TypeScript Server');
res.end();

});




app.listen(3000, () => {

console.log(`⚡️[server]: Server is running at 3000`);

});



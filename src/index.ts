import * as express from 'express';
import "reflect-metadata";
import "./database/database";
import "./config/env";
import { routes } from './routes';


const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log("Server is Running! http://localhost:3333"));
import * as express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import usersRoutes from "./routes/UsersRoutes";
import insuranceRoutes from "./routes/InsuranceRoutes";

createConnection().then().catch(error => console.log(error));

const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(insuranceRoutes);

app.listen(3333, () => console.log("Server is Running! http://localhost:3333"));
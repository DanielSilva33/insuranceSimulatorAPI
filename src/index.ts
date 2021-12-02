import * as express from 'express';
import "reflect-metadata";
import {createConnection} from "typeorm";
import usersRoutes from "./routes/UsersRoutes";
import insuranceRoutes from "./routes/InsuranceRoutes";
import CoberturaRoutes from "./routes/CoberturaRotes";

createConnection().then().catch(error => console.log(error));

const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(insuranceRoutes);
app.use(CoberturaRoutes);

app.listen(3333, () => console.log("Server is Running! http://localhost:3333"));
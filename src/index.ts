import * as express from 'express';
import "reflect-metadata";
import "./database/database";
import "./config/env";
import usersRoutes from "./routes/UsersRoutes";
import insuranceRoutes from "./routes/InsuranceRoutes";
import CoberturaRoutes from "./routes/CoberturaRotes";
import UsersAuth from "./routes/UsersAuthRoutes";


const app = express();
app.use(express.json());
app.use(usersRoutes);
app.use(insuranceRoutes);
app.use(CoberturaRoutes);
app.use(UsersAuth);

app.listen(3333, () => console.log("Server is Running! http://localhost:3333"));
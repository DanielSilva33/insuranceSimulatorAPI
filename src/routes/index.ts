import { Router } from "express";
import usersRoutes from "./UsersRoutes";
import insuranceRoutes from "./InsuranceRoutes";
import CoberturaRoutes from "./CoberturaRotes";
import UsersAuth from "./UsersAuthRoutes";

const routes = Router();

routes.use(usersRoutes);
routes.use(insuranceRoutes);
routes.use(CoberturaRoutes);
routes.use(UsersAuth);

export { routes }
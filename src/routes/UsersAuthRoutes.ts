import { Router } from "express";
import { saveUsers, listUsersAuth, login } from "../controller/UsersAuthController";
import { auth } from "../middleware/auth";

const routes = Router();

routes.get("/users-auth", listUsersAuth);
routes.post("/session", login);
routes.post("/users-auth", saveUsers);


export default routes;
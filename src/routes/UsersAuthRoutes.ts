import { Router } from "express";
import { saveUsers, listUsersAuth, login } from "../controller/UsersAuthController";
import { auth } from "../middleware/auth";

const routes = Router();

routes.get("/users-auth", listUsersAuth);
routes.post("/users-save", saveUsers);
routes.post("/session", login);


export default routes;
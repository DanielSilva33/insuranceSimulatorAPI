import { Router } from "express";
import { getUsersById, saveUsers, getAllUsers } from "../controller/UserController";

const routes = Router();

routes.get("/users", getAllUsers);
routes.get("/users/:user_id", getUsersById);
routes.post("/users", saveUsers);


export default routes;
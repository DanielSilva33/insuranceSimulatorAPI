import { Router } from "express";
import { getUsersById, saveUsers, getAllUsers } from "../controller/UserController";
import { auth } from "../middleware/auth";


const routes = Router();

routes.get("/users", getAllUsers);
routes.get("/users/:user_id", getUsersById);
routes.post("/users", auth, saveUsers);


export default routes;
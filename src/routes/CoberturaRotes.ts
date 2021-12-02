import { Router } from "express";
import { getAllCobertura, getCoberturaById, saveCobertura} from "../controller/CoberturaController";
import { getAllCoberturaC } from "../controller/SimulatorController";

const routes = Router();

routes.get("/cobertura", getAllCobertura);
routes.get("/cobertura/:id", getCoberturaById);
routes.get("/allcobertura", getAllCoberturaC);
routes.post("/cobertura", saveCobertura);


export default routes;
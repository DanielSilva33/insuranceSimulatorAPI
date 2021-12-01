import { Router } from "express";
import { appendFile } from "fs";
import { getAllInsurance, getInsuranceById, saveInsurance} from "../controller/InsuranceController";

const routes = Router();

routes.get("/insurance", getAllInsurance);
routes.get("/insurance/:id", getInsuranceById);
routes.post("/insurance", saveInsurance);


export default routes;
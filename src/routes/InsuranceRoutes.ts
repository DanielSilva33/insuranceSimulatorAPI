import { Router } from "express";
import { getAllInsurance, getInsuranceById, saveInsurance} from "../controller/InsuranceController";
import { auth } from "../middleware/auth";

const routes = Router();

routes.get("/insurance", getAllInsurance);
routes.get("/insurance/:id", getInsuranceById);
routes.post("/insurance", auth, saveInsurance);


export default routes;
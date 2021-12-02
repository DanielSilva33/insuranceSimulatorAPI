import { getRepository } from "typeorm";
import { Cobertura } from "../entity/Cobertura";
import { Request, Response} from "express";

export const getAllCoberturaC = async(request: Request, response: Response) => {
    const cobertura = await getRepository(Cobertura).find({ relations: ["seguro_id"]});
    return response.json(cobertura);
};

/*export const simulator = async(request: Request, response: Response) => {
    const capital = request.body.capital;

    const cobertura = await getRepository(Cobertura).find({ select: ["fator"]});

    const calculatorAward = (capital * cobertura);

}*/
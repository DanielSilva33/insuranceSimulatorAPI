import { getRepository } from "typeorm";
import { Cobertura } from "../entity/Cobertura";
import { Request, Response} from "express";

export const getAllCobertura = async(request: Request, response: Response) => {
    const cobertura = await getRepository(Cobertura).find();
    return response.json(cobertura);
};

export const getCoberturaById = async(request: Request, response: Response) => {
    const { id } = request.params;
    const cobertura = await getRepository(Cobertura).find({
        where: {
            id: id
        }
    });
    return response.json(cobertura);
};

export const saveCobertura = async(request: Request, response: Response) => {
    const cobertura = await getRepository(Cobertura).save(request.body);
    return response.json(cobertura);
};
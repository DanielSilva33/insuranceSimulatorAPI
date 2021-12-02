import { getRepository } from "typeorm";
import { Seguro } from "../entity/Seguro";
import { Request, Response} from "express";

export const getAllInsurance = async(request: Request, response: Response) => {
    const insurance = await getRepository(Seguro).find();
    return response.json(insurance);
};

export const getInsuranceById = async(request: Request, response: Response) => {
    const { id } = request.params;
    const insurance = await getRepository(Seguro).find({
        where: {
            id: id
        }
    });
    return response.json(insurance);
};

export const saveInsurance = async(request: Request, response: Response) => {
    const insurance = await getRepository(Seguro).save(request.body);
    return response.json(insurance);
};
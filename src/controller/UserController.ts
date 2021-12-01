import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response} from "express";

export const getAllUsers = async(request: Request, response: Response) => {
    const users = await getRepository(User).find();
    return response.json(users);
};

export const getUsersById = async(request: Request, response: Response) => {
    const { user_id } = request.params;
    const users = await getRepository(User).find({
        where: {
            id: user_id
        }
    });
    return response.json(users);
};

export const saveUsers = async(request: Request, response: Response) => {
    const users = await getRepository(User).save(request.body);
    return response.json(users);
};
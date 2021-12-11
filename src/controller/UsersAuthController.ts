import { getRepository } from "typeorm";
import { UsersAuth } from "../entity/UsersAuth";
import { Request, Response} from "express";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken"


export const login = async(request: Request, response: Response) => {
    const { email, password } = request.body;

    const users = await getRepository(UsersAuth).find({
        where: {
            email
        }
    })

    if (users.length === 1) {

        if (await bcrypt.compare(password, users[0].password)) {

           const token = jwt.sign({ id: users[0].id}, process.env.APP_PASS, {
               expiresIn: "1d"
           });

           const data = {
               id: users[0].id,
               name: users[0].name,
               email: users[0].email,
               token
           }
           return response.json(data)

        } else {
            return response.status(404).json({ message: "User not found" });
        }
    } else {
        return response.status(404).json({ message: "User not found" });
    }
};

export const listUsersAuth = async(request: Request, response: Response) => {
    
    const users = await getRepository(UsersAuth).find();

    return response.status(200).json(users);
}; 

export const saveUsers = async(request: Request, response: Response) => {
    
    const { name, email, password } = request.body;

    const passwordHash = await bcrypt.hash(password, 8);

    const users = await getRepository(UsersAuth).save({

        name,
        email,
        password: passwordHash
    });

    return response.status(200).json(users);
};
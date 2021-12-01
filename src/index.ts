import * as express from 'express';
import "reflect-metadata";
import { createConnection } from "typeorm";
import { User } from "./entity/User";
import routes from "./routes/UsersRoutes";

createConnection().then(async connection => {

    console.log("Inserting a new user into the database...");
    const user = new User();
    user.id = 10;
    user.name = "Timber";
    user.age = 25;
    await connection.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(User);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));


const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is Running! http://localhost:3333"));
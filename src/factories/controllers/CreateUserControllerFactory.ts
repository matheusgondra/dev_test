import { Repository } from "typeorm";
import { CreateUserController } from "../../controllers/CreateUserController";
import { createUserValidationsFactory } from "../validations";
import { User } from "../../entity/User";
import { CreateUserService } from "../../services/CreateUserService";

export const createUserControllerFactory = (repository: Repository<User>): CreateUserController => {
	const validation = createUserValidationsFactory(repository);
	const createUser = new CreateUserService(repository)
	return new CreateUserController(validation, createUser);
};
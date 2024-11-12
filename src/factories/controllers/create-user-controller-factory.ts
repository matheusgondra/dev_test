import { Repository } from "typeorm";
import { CreateUserController } from "../../controllers";
import { User } from "../../entity/User";
import { CreateUserService } from "../../services";
import { makeCreateUserValidation } from "../validations";

export const makeCreateUserController = (repository: Repository<User>): CreateUserController => {
	const validation = makeCreateUserValidation(repository);
	const createUser = new CreateUserService(repository)
	return new CreateUserController(validation, createUser);
};
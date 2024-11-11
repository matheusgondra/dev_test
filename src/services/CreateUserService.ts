import { Repository } from "typeorm";
import { User } from "../entity/User";
import { CreateUser, CreateUserParams, CreateUserResult } from "../protocols";

export class CreateUserService implements CreateUser {
	constructor(private readonly userRepository: Repository<User>) {}

	async create(data: CreateUserParams): Promise<CreateUserResult | null> {
		const userExists = await this.userRepository.findOne({ where: { email: data.email } });
		if (userExists) {
			return null;
		}

		const user = this.userRepository.create(data);
		const newUser = await this.userRepository.save(user);
		return newUser;
	}
}
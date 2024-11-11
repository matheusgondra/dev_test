import { ConflictUserError } from "../errors";
import { badRequest, conflict, created, serverError } from "../helpers/http";
import {
	HttpController,
	HttpRequest,
	HttpResponse,
	Validation,
} from "../interfaces";
import { CreateUser } from "../protocols";

export class CreateUserController implements HttpController {
	constructor(
		private readonly validation: Validation,
		private readonly createUser: CreateUser
	) {}

	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest.body);
			if (error) {
				return badRequest(error);
			}

			const { firstName, lastName, email, password } = httpRequest.body;
			const user = await this.createUser.create({
				firstName,
				lastName,
				email,
				password,
			});
			if (!user) {
				return conflict(new ConflictUserError());
			}

			return created(user);
		} catch (error) {
			return serverError(error as Error);
		}
	}
}

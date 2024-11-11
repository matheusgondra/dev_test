import { badRequest, created, serverError } from "../helpers";
import { HttpController, HttpRequest, HttpResponse, Validation } from "../interfaces";
import { CreatePost } from "../protocols";

export class CreatePostController implements HttpController {
	constructor(
		private readonly validation: Validation,
		private readonly createPost: CreatePost
	) {}
	
	async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
		try {
			const error = this.validation.validate(httpRequest.body);
			if (error) {
				return badRequest(error);
			}

			const { title, description, userId } = httpRequest.body;
			const post = await this.createPost.create({ title, description, userId });

			return created(post);
		} catch (error) {
			return serverError(error as Error);
		}
	}
}
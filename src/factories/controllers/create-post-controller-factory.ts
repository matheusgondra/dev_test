import { Repository } from "typeorm";
import { HttpController } from "../../interfaces";
import { Post } from "../../entity/Post";
import { makeCreatePostValidation } from "../validations";
import { CreatePostService } from "../../services";
import { CreatePostController } from "../../controllers";

export const makeCreatePostController = (repository: Repository<Post>): HttpController => {
	const validation = makeCreatePostValidation();
	const createPost = new CreatePostService(repository);
	return new CreatePostController(validation, createPost);
}
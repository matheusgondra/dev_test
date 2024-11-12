import { Repository } from "typeorm";
import { CreatePost, CreatePostParams, CreatePostResult } from "../protocols";
import { Post } from "../entity/Post";

export class CreatePostService implements CreatePost {
	constructor(private readonly postRepository: Repository<Post>) {}
	
	async create(postData: CreatePostParams): Promise<CreatePostResult> {
		const post = this.postRepository.create(postData);
		const newPost = await this.postRepository.save(post);
		return newPost;
	}
}
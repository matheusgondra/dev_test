export interface CreatePost {
	create(postData: CreatePostParams): Promise<CreatePostResult>
}

export interface CreatePostParams {
	title: string;
	description: string;
	userId: number;
}

export interface CreatePostResult {
	id: number;
	title: string;
	description: string;
	userId: number;
	createdAt: Date;
	updatedAt: Date;
}
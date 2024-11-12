export interface CreateUser {
	create(data: CreateUserParams): Promise<CreateUserResult | null>;
}

export interface CreateUserParams {
	firstName: string;
	lastName: string;
	email: string;
}

export interface CreateUserResult {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
}
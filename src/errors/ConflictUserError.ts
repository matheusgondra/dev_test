export class ConflictUserError extends Error {
	constructor() {
		super("User already exists");
		this.name = "ConflictUserError";
	}
}
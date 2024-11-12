import { Repository } from "typeorm";
import { Validation } from "../../interfaces";
import { Post } from "../../entity/Post";
import { RequiredFieldValidation, ValidationComposite } from "../../validations";

export const makeCreatePostValidation = (): Validation => {
	const validations: Validation[] = [];

	const requiredFields = ["title", "description", "userId"];
	for (const field of requiredFields) {
		validations.push(new RequiredFieldValidation(field));
	}
	
	return new ValidationComposite(validations);
}
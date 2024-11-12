import { Validation } from "../../interfaces";
import { LengthValidation, RequiredFieldValidation, ValidationComposite } from "../../validations";

export const makeCreatePostValidation = (): Validation => {
	const validations: Validation[] = [];

	const requiredFields = ["title", "description", "userId"];
	for (const field of requiredFields) {
		validations.push(new RequiredFieldValidation(field));
	}

	validations.push(new LengthValidation("title", 5, 100));
	validations.push(new LengthValidation("description", 5, 100));
	
	return new ValidationComposite(validations);
}
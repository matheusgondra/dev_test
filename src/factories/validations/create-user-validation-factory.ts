import { Repository } from "typeorm";
import { User } from "../../entity/User";
import { Validation } from "../../interfaces";
import { EmailValidation, RequiredFieldValidation, ValidationComposite } from "../../validations";

export const makeCreateUserValidation = (): ValidationComposite => {
	const validations: Validation[] = [];
	
	const requiredFields = ["name", "email", "password"];
	for (const field of requiredFields) {
		validations.push(new RequiredFieldValidation(field));
	}

	validations.push(new EmailValidation("email"));
	
	return new ValidationComposite(validations);
};
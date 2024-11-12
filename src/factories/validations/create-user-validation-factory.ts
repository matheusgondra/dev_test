import { Repository } from "typeorm";
import { User } from "../../entity/User";
import { Validation } from "../../interfaces";
import { EmailValidation, LengthValidation, PasswordValidation, RequiredFieldValidation, ValidationComposite } from "../../validations";

export const makeCreateUserValidation = (): ValidationComposite => {
	const validations: Validation[] = [];
	
	const requiredFields = ["firstName", "lastName", "email", "password"];
	for (const field of requiredFields) {
		validations.push(new RequiredFieldValidation(field));
	}

	validations.push(new EmailValidation("email"));
	validations.push(new PasswordValidation("password"));
	validations.push(new LengthValidation("firstName", 2, 100));
	validations.push(new LengthValidation("lastName", 2, 100));
	
	return new ValidationComposite(validations);
};
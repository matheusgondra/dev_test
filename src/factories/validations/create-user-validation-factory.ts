import { Validation } from "../../interfaces";
import { EmailValidation, LengthValidation, RequiredFieldValidation, ValidationComposite } from "../../validations";

export const makeCreateUserValidation = (): ValidationComposite => {
	const validations: Validation[] = [];
	
	const requiredFields = ["firstName", "lastName", "email"];
	for (const field of requiredFields) {
		validations.push(new RequiredFieldValidation(field));
	}

	validations.push(new EmailValidation("email"));
	validations.push(new LengthValidation("firstName", 2, 100));
	validations.push(new LengthValidation("lastName", 2, 100));
	
	return new ValidationComposite(validations);
};
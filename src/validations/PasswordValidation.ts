import { InvalidParamError } from "../errors";
import { Validation } from "../interfaces";

export class PasswordValidation implements Validation {
	constructor(private readonly fieldName: string) {}

	validate(input: any): Error | void {
		const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
		const value = input[this.fieldName];
		const isValid = regex.test(value);
		if (!isValid) {
			return new InvalidParamError(this.fieldName);
		}
	}
}
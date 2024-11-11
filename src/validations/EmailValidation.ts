import { InvalidParamError } from "../errors";
import { Validation } from "../interfaces";

export class EmailValidation implements Validation {
	constructor(private readonly fieldName: string) {}

	validate(input: any): Error | void {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
		if (!regex.test(input[this.fieldName])) {
			return new InvalidParamError("email");
		}
	}
}
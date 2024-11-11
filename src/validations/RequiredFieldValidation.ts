import { MissingParamError } from "../errors";
import { Validation } from "../interfaces";

export class RequiredFieldValidation implements Validation {
	constructor(private readonly fieldName: string) {}

	validate(input: any): Error | void {
		if (!input[this.fieldName]) {
			return new MissingParamError(this.fieldName);
		}
	}
}

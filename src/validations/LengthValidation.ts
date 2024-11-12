import { InvalidParamError } from "../errors";
import { Validation } from "../interfaces";

export class LengthValidation implements Validation {
	constructor(
		private readonly fieldName: string,
		private readonly minLength: number,
		private readonly maxLength: number
	) {}

	validate(input: any): Error | void {
		const value = input[this.fieldName];
		const valueOutRange = value.length < this.minLength || value.length > this.maxLength
		if (valueOutRange) {
			return new InvalidParamError(this.fieldName);
		}
	}
}
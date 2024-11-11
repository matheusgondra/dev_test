import { HttpResponse } from "../interfaces";

export const badRequest = (error: Error): HttpResponse => ({
	statusCode: 400,
	body: error,
});

export const created = (data: any): HttpResponse => ({
	statusCode: 201,
	body: data,
});

export const conflict = (error: Error): HttpResponse => ({
	statusCode: 409,
	body: error,
});

export const serverError = (error: Error): HttpResponse => ({
	statusCode: 500,
	body: error
});
import { Request, Response } from "express";
import { HttpController, HttpResponse } from "../interfaces";

export const adaptRoute = (controller: HttpController) => {
	return async (req: Request, res: Response) => {
		const httpRequest = {
			body: req.body,
		};

		const httpResponse: HttpResponse = await controller.handle(httpRequest);
		if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
			res.status(httpResponse.statusCode).json(httpResponse.body);
		} else {
			res.status(httpResponse.statusCode).json({
				error: httpResponse.body.message,
			});
		}
	}
}
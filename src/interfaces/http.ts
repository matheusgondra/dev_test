export interface HttpController {
	handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export interface HttpRequest { 
	body?: any;
}

export interface HttpResponse {
	statusCode: number;
	body: any;
}
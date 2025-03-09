import { Request, Response } from 'express';
import ApiResponseBuilder from '../builders/api-response.js';

export const getMethod = (req: Request, res: Response) => {
	const responseBuilder = new ApiResponseBuilder();
	responseBuilder.setStatus(200).setData('Hello from API');
	const response = responseBuilder.build();
	res.status(response.status).json(response);
};

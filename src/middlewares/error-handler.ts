import { NextFunction, Request, Response } from 'express';
import ApiError from '../components/error/error.js';

export const errorHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (err instanceof ApiError) {
		res.status(err.status).json(err.toJSON());
	}

	const genericError = ApiError.getBuilder()
		.setStatus(500)
		.setMessage(
			err instanceof Error ? err.message : 'unknown error occurred',
		)
		.setStack(err instanceof Error ? err.stack : '')
		.setTimestamp()
		.build();
	res.status(genericError.status).json(genericError);
};

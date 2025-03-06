import { Request, Response } from 'express';

export const getMethod = (req: Request, res: Response) => {
	res.send('Hello from API');
};

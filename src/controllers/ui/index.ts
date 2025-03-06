import { Request, Response } from 'express';
import UiService from '../../services/ui/index.js';

export const getButton = (req: Request, res: Response) => {
	const { platform, theme } = req.query;

	if (!platform || !theme) {
		res.status(400).send('Platform and theme are required');
	}

	const uiService = new UiService();
	const button = uiService.createButton(platform as string, theme as string);

	res.json(button.render());
};

import { Request, Response } from 'express';
import UiService from '../../services/ui/index.js';
import { Component } from '../../enums/ui/index.js';

export const getUi = (req: Request, res: Response) => {
	const { component } = req.params;
	const { platform, theme } = req.query;

	if (!platform || !theme) {
		res.status(400).send('Platform and theme are required');
	}

	const uiService = new UiService();
	const button = uiService.createUi(
		component as Component,
		platform as string,
		theme as string,
	);

	res.json(button.render());
};

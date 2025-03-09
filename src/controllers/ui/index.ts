import { NextFunction, Request, Response } from 'express';
import UiService from '../../services/ui/index.js';
import { Component } from '../../enums/ui/index.js';
import ApiResponseBuilder from '../../builders/api-response.js';
import ApiError from '../../components/error/error.js';

export const getUi = (req: Request, res: Response, next: NextFunction) => {
	const { component } = req.params;
	const { platform, theme } = req.query;
	const responseBuilder = new ApiResponseBuilder();

	if (!platform || !theme) {
		return next(
			ApiError.getBuilder()
				.setStatus(400)
				.setMessage('Platform and theme params are required')
				.setTimestamp()
				.build(),
		);
	}

	try {
		const uiService = new UiService();
		const button = uiService.createUi(
			component as Component,
			platform as string,
			theme as string,
		);
		const data = button.render();

		responseBuilder.setStatus(200);
		responseBuilder.setTimestamp();
		responseBuilder.setData(data);
		const response = responseBuilder.build();
		res.json(response);
	} catch (error) {
		next(error);
	}
};

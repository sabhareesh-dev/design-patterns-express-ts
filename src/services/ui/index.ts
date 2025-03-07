import { Component } from '../../enums/ui/index.js';
import UiFactoryProvider from '../../factories/ui/ui-factory-provider.js';
import Ui from '../../interfaces/ui/ui.js';

export default class UiService {
	constructor() {}

	createUi(component: Component, platform: string, theme: string): Ui {
		const factory = UiFactoryProvider.getUiFactory(platform);

		switch (component) {
			case Component.BUTTON:
				return factory.createButton(theme);
			case Component.INPUT:
				return factory.createInput(theme);
			default:
				throw new Error('Unknown theme');
		}
	}
}

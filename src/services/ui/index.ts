import { Component } from '../../enums/ui/index.js';
import UiFactoryProvider from '../../factories/ui/ui-factory-provider.js';
import UiComponent from '../../interfaces/ui/ui-component.js';

export default class UiService {
	constructor() {}

	createUi(
		component: Component,
		platform: string,
		theme: string,
	): UiComponent {
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

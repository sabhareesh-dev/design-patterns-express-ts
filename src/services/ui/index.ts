import UiFactoryProvider from '../../factories/ui/ui-factory-provider.js';

export default class UiService {
	constructor() {}

	createButton(platform: string, theme: string) {
		const factory = UiFactoryProvider.getUiFactory(platform);
		const button = factory.createButton(theme);
		return button;
	}
}

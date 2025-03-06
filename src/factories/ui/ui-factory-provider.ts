import { Platform } from '../../enums/ui/index.js';
import MobileFactory from './mobile-factory.js';
import UiFactory from './ui-factory.js';
import WebFactory from './web-factory.js';

export default class UiFactoryProvider {
	static getUiFactory(platform: string): UiFactory {
		switch (platform) {
			case Platform.WEB:
				return new WebFactory();
			case Platform.MOBILE:
				return new MobileFactory();
			default:
				throw new Error('Unknown platform');
		}
	}
}

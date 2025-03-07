import DarkInputMobile from '../../components/ui/mobile/input/dark-input.js';
import LightInputMobile from '../../components/ui/mobile/input/light-input.js';
import DarkButtonWeb from '../../components/ui/web/button/dark-button.js';
import LightButtonWeb from '../../components/ui/web/button/light-button.js';
import { Theme } from '../../enums/ui/index.js';
import Input from '../../interfaces/ui/input.js';
import UiFactory from './ui-factory.js';

export default class MobileFactory implements UiFactory {
	createButton(theme: string) {
		switch (theme) {
			case Theme.LIGHT:
				return new LightButtonWeb();
			case Theme.DARK:
				return new DarkButtonWeb();
			default:
				throw new Error('Unknown theme');
		}
	}
	createInput(theme: string): Input {
		switch (theme) {
			case Theme.LIGHT:
				return new LightInputMobile();
			case Theme.DARK:
				return new DarkInputMobile();
			default:
				throw new Error('Unknown theme');
		}
	}
}

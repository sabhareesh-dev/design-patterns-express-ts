import ApiError from '../../components/error/error.js';
import DarkButtonMobile from '../../components/ui/mobile/button/dark-button.js';
import LightButtonMobile from '../../components/ui/mobile/button/light-button.js';
import DarkInputMobile from '../../components/ui/mobile/input/dark-input.js';
import LightInputMobile from '../../components/ui/mobile/input/light-input.js';
import { Theme } from '../../enums/ui/index.js';
import Input from '../../interfaces/ui/input.js';
import UiFactory from './ui-factory.js';

export default class MobileFactory implements UiFactory {
	createButton(theme: string) {
		switch (theme) {
			case Theme.LIGHT:
				return new LightButtonMobile();
			case Theme.DARK:
				return new DarkButtonMobile();
			default:
				throw ApiError.getBuilder()
					.setStatus(400)
					.setMessage(`Unknown theme: ${theme}`)
					.setStack()
					.setTimestamp()
					.build();
		}
	}
	createInput(theme: string): Input {
		switch (theme) {
			case Theme.LIGHT:
				return new LightInputMobile();
			case Theme.DARK:
				return new DarkInputMobile();
			default:
				throw ApiError.getBuilder()
					.setStatus(400)
					.setMessage(`Unknown theme: ${theme}`)
					.setStack()
					.setTimestamp()
					.build();
		}
	}
}

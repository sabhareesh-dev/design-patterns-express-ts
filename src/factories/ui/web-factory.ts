import ApiError from '../../components/error/error.js';
import DarkButtonWeb from '../../components/ui/web/button/dark-button.js';
import LightButtonWeb from '../../components/ui/web/button/light-button.js';
import DarkInputWeb from '../../components/ui/web/input/dark-input.js';
import LightInputWeb from '../../components/ui/web/input/light-input.js';
import { Theme } from '../../enums/ui/index.js';
import Button from '../../interfaces/ui/button.js';
import Input from '../../interfaces/ui/input.js';
import UiFactory from './ui-factory.js';

export default class WebFactory extends UiFactory {
	createButton(theme: string): Button {
		switch (theme) {
			case Theme.LIGHT:
				return new LightButtonWeb();
			case Theme.DARK:
				return new DarkButtonWeb();
			default:
				throw ApiError.getBuilder()
					.setStatus(400)
					.setMessage('Unknown theme')
					.setStack()
					.setTimestamp()
					.build();
		}
	}
	createInput(theme: string): Input {
		switch (theme) {
			case Theme.LIGHT:
				return new LightInputWeb();
			case Theme.DARK:
				return new DarkInputWeb();
			default:
				throw ApiError.getBuilder()
					.setStatus(400)
					.setMessage('Unknown theme')
					.setStack()
					.setTimestamp()
					.build();
		}
	}
}

import DarkButton from '../../components/ui/dark-button.js';
import LightButton from '../../components/ui/light-button.js';
import { Theme } from '../../enums/ui/index.js';
import Button from '../../interfaces/ui/button.js';
import UiFactory from './ui-factory.js';

export default class WebFactory extends UiFactory {
	createButton(theme: string): Button {
		switch (theme) {
			case Theme.LIGHT:
				return new LightButton();
			case Theme.DARK:
				return new DarkButton();
			default:
				throw new Error('Unknown theme');
		}
	}
}

import DarkButton from '../../components/ui/dark-button.js';
import LightButton from '../../components/ui/light-button.js';
import { Theme } from '../../enums/ui/index.js';

export default class MobileFactory {
	createButton(theme: string) {
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

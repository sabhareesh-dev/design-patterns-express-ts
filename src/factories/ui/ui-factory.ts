import Button from '../../interfaces/ui/button.js';

export default abstract class UiFactory {
	abstract createButton(_theme: string): Button;
}

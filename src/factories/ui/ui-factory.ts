import Button from '../../interfaces/ui/button.js';
import Input from '../../interfaces/ui/input.js';

export default abstract class UiFactory {
	abstract createButton(_theme: string): Button;
	abstract createInput(_theme: string): Input;
}

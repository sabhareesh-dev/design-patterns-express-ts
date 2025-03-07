import Ui from './ui.js';

export default interface Input extends Ui {
	setValue(_value: string): void;
	getValue(): string | number | boolean;
}

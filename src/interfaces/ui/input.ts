import UiComponent from './ui-component.js';

export default interface Input extends UiComponent {
	setValue(_value: string): void;
	getValue(): string | number | boolean;
}

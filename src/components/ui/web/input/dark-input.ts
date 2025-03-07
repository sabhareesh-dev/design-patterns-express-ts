import Input from '../../../../interfaces/ui/input.js';

export default class DarkInputWeb implements Input {
	value: string | number | boolean;

	getValue(): string | number | boolean {
		return this.value;
	}
	setValue(value: string): void {
		this.value = value;
	}
	render(): string {
		return 'Rendering dark input web';
	}
}

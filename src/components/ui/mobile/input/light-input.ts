import Input from '../../../../interfaces/ui/input.js';

export default class LightInputMobile implements Input {
	value: string | number | boolean;

	setValue(value: string): void {
		this.value = value;
	}
	getValue(): string | number | boolean {
		return this.value;
	}
	render(): string {
		return 'Rendering light input mobile';
	}
}

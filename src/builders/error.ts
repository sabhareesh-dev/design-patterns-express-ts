import ApiError from '../components/error/error.js';

export default class ApiErrorBuilder {
	status: number = 500;
	message: string = 'Error occurred!';
	timestamp: string = '';
	stackTrace: string[] = [];
	details: any = '';

	setStatus(status: number) {
		this.status = status;
		return this;
	}

	setMessage(message: string) {
		this.message = message;
		return this;
	}

	setTimestamp(timestamp?: string) {
		this.timestamp = timestamp ?? new Date().toISOString();
		return this;
	}

	setStack(stack?: string) {
		this.stackTrace.push(stack ?? new Error().stack);
		return this;
	}

	setDetails(details: any) {
		this.details = details;
		return this;
	}

	build() {
		return new ApiError(this);
	}
}

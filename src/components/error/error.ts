import ApiErrorBuilder from '../../builders/error.js';
import IApiError from '../../interfaces/error.js';

export default class ApiError extends Error implements IApiError {
	status: number;
	stackTrace: string[];
	details?: any;
	timestamp: string;

	constructor(builder: ApiErrorBuilder) {
		super(builder.message);
		Object.setPrototypeOf(this, ApiError.prototype);
		this.status = builder.status;
		this.stackTrace = builder.stackTrace;
		this.timestamp = builder.timestamp;
	}

	static getBuilder() {
		return new ApiErrorBuilder();
	}

	toJSON() {
		return {
			status: this.status,
			message: this.message,
			stackTrace: this.stackTrace,
			details: this.details,
			timestamp: this.timestamp,
		};
	}
}

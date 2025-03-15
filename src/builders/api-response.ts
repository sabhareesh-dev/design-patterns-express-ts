import ApiResponse from '../interfaces/api/api-response.js';

export default class ApiResponseBuilder {
	private response: ApiResponse;

	constructor() {
		this.response = {
			status: 200,
			format: 'JSON',
		};
	}

	setStatus(status: number) {
		this.response.status = status;
		return this;
	}

	setMessage(message: string) {
		this.response.message = message;
	}

	setData(data: any) {
		this.response.data = data;
	}

	setError(error: string) {
		this.response.error = error;
	}

	setFormat(format: 'JSON' | 'XML') {
		this.response.format = format;
	}

	setPagination(page: number, limit: number, total: number) {
		this.response.metadata.pagination = {
			page,
			limit,
			total,
		};
	}

	setTimestamp(timestamp?: string) {
		const metadata = this.response.metadata ?? {};
		metadata.timestamp = timestamp ?? new Date().toISOString();
	}

	build() {
		return this.response;
	}
}

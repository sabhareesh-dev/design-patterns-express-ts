export default interface ApiResponse {
	status: number;
	message?: string;
	data?: any;
	error?: string;
	metadata?: {
		timestamp?: string;
		pagination?: {
			page: number;
			limit: number;
			total: number;
		};
	};
	format: 'JSON' | 'XML';
}

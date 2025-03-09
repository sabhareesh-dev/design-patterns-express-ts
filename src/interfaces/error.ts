export default interface ApiError extends Error {
	status: number;
	details?: any;
	timestamp: string;
}

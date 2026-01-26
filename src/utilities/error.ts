export enum StatusEnum {
	Success = "success",
	Error = "error",
}

export interface SuccessResponse<T> {
	status: StatusEnum.Success;
	data: T | null;
}

export interface ErrorResponse {
	status: StatusEnum.Error;
	message: string;
	error: {
		details: string | undefined;
	};
}

export const createSuccessResponse = <T>(
	data: T | null = null,
): SuccessResponse<T> => ({
	status: StatusEnum.Success,
	data,
});

export const createErrorResponse = (
	message: string,
	details?: string,
): ErrorResponse => ({
	status: StatusEnum.Error,
	message,
	error: {
		details,
	},
});

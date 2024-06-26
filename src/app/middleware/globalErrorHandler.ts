import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const globalErrorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const message = err.message || "Internal Server Error";
	return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
		success: false,
		message,
		error: err,
	});
};
export default globalErrorHandler;

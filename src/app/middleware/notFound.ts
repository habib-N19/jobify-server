import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
	return res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: "Not Found",
		error: {
			code: httpStatus.NOT_FOUND,
			message: "The requested resource was not found",
		},
	});
};
export default notFound;

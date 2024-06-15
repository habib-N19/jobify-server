import { Response } from 'express';

type ResponseOptions<T> = {
  statusCode: number;
  success: boolean;
  message?: string;
  data?: T;
  total?: Number;
  pages?: Number;
  page?: Number;
  limit?: Number;
  totalPages?: Number;
};
export const sendResponse = <T>(res: Response, options: ResponseOptions<T>) => {
  const { statusCode, success, message, data, total, page, pages } = options;
  const response = {
    success,
    message,
    data,
    total,
    page,
    pages,
  };
  res.status(statusCode).json(response);
};

import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';
interface AuthRequest extends Request {
  user?: any;
}
export const protectedRoute = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  let token: string;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, config.jwtSecret!);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        message: 'Not authorized to access this route',
      });
    }
  }
};

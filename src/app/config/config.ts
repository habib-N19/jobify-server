import dotenv from 'dotenv';
dotenv.config();
export const config = {
  port: process.env.PORT || 8000,
  mongodbUri:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/express-mongo-api',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiration: process.env.JWT_EXPIRATION || '1d',
  SALT_ROUNDS: process.env.SALT_ROUNDS || 10,
};

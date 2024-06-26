import jwt, { JwtPayload } from 'jsonwebtoken';
export const createToken = (
  jwtPayload: {
    _id: string;
    role: string;
  },
  secret: string,
  expiresIn: string,
): string => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
export const verifyToken = (token: string, secret: string): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

import { config } from '../../config/config';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await user.comparePassword(payload.password);
  if (!isMatch) {
    throw new Error('Password not match');
  }

  const jwtPayload = {
    _id: user.id,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwtSecret!,
    config.jwtExpiration!,
  );
  return { accessToken };
};
export const AuthServices = {
  loginUser,
};

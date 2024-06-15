import { Document } from 'mongoose';

export interface TUser extends Document {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

import { ObjectId } from 'mongoose';

export type TJob = {
  _id: string;
  title: string;
  description: string;
  company?: ObjectId;
  salary: number;
  location: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
};

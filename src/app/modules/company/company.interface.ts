import { TJob } from '../Job/job.interface';

export type TCompany = {
  _id: string;
  name: string;
  industry: string;
  contactEmail: string;
  address: string;
  jobs: TJob[];
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
};

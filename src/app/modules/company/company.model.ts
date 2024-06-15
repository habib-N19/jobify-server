import { Schema, model } from 'mongoose';
import { TCompany } from './company.interface';

const companySchema = new Schema<TCompany>({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Job',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Company = model<TCompany>('Company', companySchema);

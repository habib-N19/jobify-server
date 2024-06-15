import { TJob } from './job.interface';
import { Job } from './job.model';

const createJobInDB = async (payload: TJob) => {
  const result = await Job.create(payload);
  return result;
};

const getAllJobFromDB = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  const jobs = await Job.find().skip(skip).limit(limit).populate('company');
  const total = await Job.countDocuments();
  return {
    jobs,
    total,
    page,
    pages: Math.ceil(total / limit),
  };
};

const getSingleJobFromDB = async (id: string) => {
  const result = await Job.findById(id).populate('company');
  return result;
};

const updateJobInDB = async (id: string, payload: Partial<TJob>) => {
  const result = await Job.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

const deleteJobFromDB = async (id: string) => {
  const result = await Job.findByIdAndDelete(id);
  return result;
};

const getJobByCompany = async (companyId: string) => {
  console.log(companyId);
  const result = await Job.find({ company: companyId }).populate('company');
  return result;
};

export const JobServices = {
  createJobInDB,
  getAllJobFromDB,
  getSingleJobFromDB,
  updateJobInDB,
  deleteJobFromDB,
  getJobByCompany,
};

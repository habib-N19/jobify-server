import { TCompany } from './company.interface';
import { Company } from './company.model';

const createCompanyIntoMongoDB = async (payload: TCompany) => {
  const result = await Company.create(payload);
  return result;
};
const getAllCompanyFromDB = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;

  const companies = await Company.find().skip(skip).limit(limit);
  const total = await Company.countDocuments();
  return {
    companies,
    total,
    page,
    pages: Math.ceil(total / limit),
  };
};
const getSingleCompanyFromDB = async (id: string) => {
  const result = await Company.findById(id);

  return result;
};
const updateCompanyInDB = async (id: string, payload: Partial<TCompany>) => {
  const result = await Company.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
const deleteCompanyFromDB = async (id: string) => {
  const result = await Company.findByIdAndDelete(id);
  return result;
};
const addJobToCompany = async (companyId: string, jobId: string) => {
  await Company.findByIdAndUpdate(companyId, {
    $push: { jobs: jobId },
  });
};
const removeJobFromCompany = async (companyId: string, jobId: string) => {
  await Company.findByIdAndUpdate(companyId, {
    $pull: { jobs: jobId },
  });
};
export const CompanyServices = {
  createCompanyIntoMongoDB,
  getAllCompanyFromDB,
  getSingleCompanyFromDB,
  updateCompanyInDB,
  deleteCompanyFromDB,
  addJobToCompany,
  removeJobFromCompany,
};

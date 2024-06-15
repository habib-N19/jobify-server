import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CompanyServices } from './company.service';

const createCompany = catchAsync(async (req, res) => {
  const result = await CompanyServices.createCompanyIntoMongoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company created successfully',
    data: result,
  });
});
const getAllCompany = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  const result = await CompanyServices.getAllCompanyFromDB(page, limit);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All companies fetched successfully',
    data: result.companies,
    total: result.total,
    page: result.page,
    pages: result.pages,
  });
});
const getSingleCompany = catchAsync(async (req, res) => {
  const result = await CompanyServices.getSingleCompanyFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company fetched successfully',
    data: result,
  });
});
const updateCompany = catchAsync(async (req, res) => {
  console.log('update company ', req.body, req.params.id);
  const result = await CompanyServices.updateCompanyInDB(
    req.params.id,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company updated successfully',
    data: result,
  });
});
const deleteCompany = catchAsync(async (req, res) => {
  const result = await CompanyServices.deleteCompanyFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Company deleted successfully',
    data: result,
  });
});
export const CompanyController = {
  createCompany,
  getAllCompany,
  getSingleCompany,
  updateCompany,
  deleteCompany,
};

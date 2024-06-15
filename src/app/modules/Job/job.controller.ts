import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { JobServices } from './job.service';
import { CompanyServices } from '../company/company.service';

const createJob = catchAsync(async (req, res) => {
  const result = await JobServices.createJobInDB(req.body);
  await CompanyServices.addJobToCompany(req.body.company, result._id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job created successfully',
    data: result,
  });
});
const getAllJob = catchAsync(async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const result = await JobServices.getAllJobFromDB(page, limit);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All jobs fetched successfully',
    data: result.jobs,
    total: result.total,
    page: result.page,
    pages: result.pages,
  });
});
const getSingleJobById = catchAsync(async (req, res) => {
  console.log(req.params.id.toString());
  const result = await JobServices.getSingleJobFromDB(req.params.id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job fetched successfully',
    data: result,
  });
});
const updateJob = catchAsync(async (req, res) => {
  console.log('update', req.body, 'id', req.params.id);
  const result = await JobServices.updateJobInDB(req.params.id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job updated successfully',
    data: result,
  });
});
const deleteJob = catchAsync(async (req, res) => {
  const jobId = req.params.id;
  const result = await JobServices.deleteJobFromDB(jobId);

  if (result && result.company) {
    await CompanyServices.removeJobFromCompany(
      result.company.toString(),
      jobId,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Job deleted successfully',
      data: result,
    });
  } else {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: 'Job not found or already deleted',
      data: null,
    });
  }
});

const getJobByCompany = catchAsync(async (req, res) => {
  const result = await JobServices.getJobByCompany(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Jobs fetched successfully',
    data: result,
  });
});
export const JobController = {
  createJob,
  getAllJob,
  getSingleJobById,
  updateJob,
  deleteJob,
  getJobByCompany,
};

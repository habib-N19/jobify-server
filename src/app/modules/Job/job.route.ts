import express from 'express';
import { JobController } from './job.controller';
import { protectedRoute } from '../../middleware/authMiddleware';

const router = express.Router();
router.post('/create-job', protectedRoute, JobController.createJob);
router.get('/:id', protectedRoute, JobController.getSingleJobById);
router.put('/update/:id', protectedRoute, JobController.updateJob);
router.delete('/:id', protectedRoute, JobController.deleteJob);
router.get('/company/:id', protectedRoute, JobController.getJobByCompany);
router.get('/', JobController.getAllJob);
export const JobRoutes = router;

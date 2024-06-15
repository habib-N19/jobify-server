import express from 'express';
import { CompanyController } from './company.controller';
const router = express.Router();
router.post('/create-company', CompanyController.createCompany);
router.get('/:id', CompanyController.getSingleCompany);

router.put('/update/:id', CompanyController.updateCompany);
router.delete('/:id', CompanyController.deleteCompany);
router.get('/', CompanyController.getAllCompany);

export const CompanyRoutes = router;

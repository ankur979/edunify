import express from 'express';
import { createSchool, getSchools } from '../controllers/schoolController.js';

const router = express.Router();

router.post('/schools', createSchool);

router.get('/schools', getSchools);

export default router;

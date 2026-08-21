import { Router } from 'express';
import { googleLogin } from '../controllers/authController.js';

const router = Router();

// POST /api/auth/google
router.post('/google', googleLogin);

export default router;
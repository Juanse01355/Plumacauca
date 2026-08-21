import { Router } from 'express';
import { getMapConfigController } from '../controllers/mapController.js';

const router = Router();

// GET /api/map/config
router.get('/config', getMapConfigController);

export default router;
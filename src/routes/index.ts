import express from 'express';
import testRoute from './test-route.js';
import uiRoute from './ui/index.js';

const router = express.Router();

router.use('/api/ping', testRoute);
router.use('/api/ui', uiRoute);

export default router;

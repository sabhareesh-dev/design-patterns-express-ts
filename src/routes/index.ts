import express from 'express';
import testRoute from './test-route.js';

const router = express.Router();

router.use('/api/ping', testRoute);

export default router;

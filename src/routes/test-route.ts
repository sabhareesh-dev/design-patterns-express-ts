import express from 'express';
import { getMethod } from '../controllers/test-controller.js';

const testRoute = express.Router();

testRoute.get('/', getMethod);

export default testRoute;

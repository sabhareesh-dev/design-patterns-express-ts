import express from 'express';
import { getButton } from '../../controllers/ui/index.js';

const uiRoute = express.Router();

uiRoute.get('/button', getButton);

export default uiRoute;

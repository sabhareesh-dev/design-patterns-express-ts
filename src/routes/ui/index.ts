import express from 'express';
import { getUi } from '../../controllers/ui/index.js';

const uiRoute = express.Router();

uiRoute.get('/:component', getUi);

export default uiRoute;

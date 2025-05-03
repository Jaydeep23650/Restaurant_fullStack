import express from 'express';
import { createReservation } from '../controller/controller.js';
import { handleError } from '../error/error.js';

const router = express.Router();

router.post('/send', createReservation);

export default router;

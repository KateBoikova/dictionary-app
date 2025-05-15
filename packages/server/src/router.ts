import { Router } from 'express';
import wordRouter from './routes/wordRoutes';

const router = Router();
router.use('/words', wordRouter);

export default router;

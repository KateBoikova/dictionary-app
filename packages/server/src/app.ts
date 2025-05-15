import express from 'express';
import wordRoutes from './routes/wordRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());

app.use('/api/words', wordRoutes);

app.use(errorHandler);

export default app;

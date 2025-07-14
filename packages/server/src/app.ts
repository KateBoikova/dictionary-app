import express from 'express';
import cors from 'cors';
import wordRoutes from './routes/wordRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/words', wordRoutes);

app.use(errorHandler);

export default app;

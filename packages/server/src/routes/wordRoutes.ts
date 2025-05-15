import { Router } from 'express';
import {
  createWord,
  getWords,
  getWordById,
  updateWord,
  deleteWord,
} from '../controller/word.controller';

const wordRouter = Router();

wordRouter.route('/').get(getWords).post(createWord);

wordRouter.route('/:id').get(getWordById).put(updateWord).delete(deleteWord);

export default wordRouter;

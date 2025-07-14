import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';
import Word from '../models/word';

export const createWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { body } = req;
  try {
    console.log('body', body);
    // const { word, tag } = req.body;
    const createdWord = await Word.create(body);

    if (!createdWord) {
      return next(createHttpError(400, 'Bad request'));
    }
    res.status(201).send({ data: createdWord });
    return;
    // const newWord: Word = { id: Date.now(), word, tag };
    // words.push(newWord);
    // res.status(201).json(newWord);
  } catch (error) {
    next(error);
  }
};

export const getWords = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const foundWords = await Word.find();
    res.status(200).send({ data: foundWords });
    // res.json(words);
  } catch (error) {
    next(error);
  }
};

export const getWordById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { id },
  } = req;
  try {
    const foundWord = await Word.findById(id);
    if (foundWord) {
      res.status(200).send({ data: foundWord });
      return;
    } else {
      return next(createHttpError(404, 'Word not found'));
    }
  } catch (error) {
    next(error);
  }
};

export const updateWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { id },
    body,
  } = req;
  try {
    // const {tag} = req.body;
    const updatedWord = await Word.findByIdAndUpdate(id, body);
    if (updatedWord) {
      res.status(200).send({ data: updatedWord });
      return;
    }
  } catch (error) {
    next(error);
  }
};

export const deleteWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {
    params: { id },
  } = req;

  try {
    // const wordId = JSON.parse(JSON.stringify(id));
    const deletedWord = await Word.findByIdAndDelete(id);
    if (!deletedWord) {
      return next(createHttpError(404, 'Word not found'));
    }
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

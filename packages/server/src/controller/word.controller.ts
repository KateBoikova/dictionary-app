import { Request, Response, NextFunction } from 'express';
import { words, Word } from '../models/word';

export const createWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { word, tag } = req.body;
    const newWord: Word = { id: Date.now(), word, tag };
    words.push(newWord);
    res.status(201).json(newWord);
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
    res.json(words);
  } catch (error) {
    next(error);
  }
};

export const getWordById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const word = words.find(word => word.id === id);
    if (!word) {
      res.status(404).json({ message: 'Word not found' });
      return;
    }
    res.json(word);
  } catch (error) {
    next(error);
  }
};

export const updateWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const { tag } = req.body;
    const wordIndex = words.findIndex(word => word.id === id);
    if (wordIndex === -1) {
      res.status(404).json({ message: 'Word not found' });
      return;
    }
    words[wordIndex].tag = tag;
    res.json(words[wordIndex]);
  } catch (error) {
    next(error);
  }
};

export const deleteWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = parseInt(req.params.id, 10);
    const wordIndex = words.findIndex(word => word.id === id);
    if (wordIndex === -1) {
      res.status(404).json('Word not found');
      return;
    }
    const deletedWord = words.splice(wordIndex, 1)[0];
    res.json(deletedWord);
  } catch (error) {
    next(error);
  }
};

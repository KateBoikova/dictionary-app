import mongoose, { Schema } from 'mongoose';

export interface Word {
  id: number;
  word: [];
  tag?: string;
}

const wordSchema = new Schema({
  id: { type: Number },
  word: { type: Array },
  tag: { type: String },
});

const Word = mongoose.model('words', wordSchema);

export let words: Word[] = [];

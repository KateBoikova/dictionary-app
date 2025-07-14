// import mongoose from 'mongoose';
import mongoose from './index';

const wordSchema = new mongoose.Schema({
  word: {
    license: { name: String, url: String },
    meanings: [
      {
        partOfSpeech: String,
        definitions: [Object],
        phonetic: String,
        phonetics: [Object],
        sourceUrls: [String],
        word: String,
      },
    ],
  },

  tag: { type: String },
});

const Word = mongoose.model('Word', wordSchema);

export default Word;
// export let words = Word[];

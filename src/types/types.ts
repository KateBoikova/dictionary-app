export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
};

export type Definition = {
  antonyms: [];
  definition: string;
  example: string;
  synonyms: [];
};

export type Word = {
  word: string;
  phonetic: string;
  phonetics: [];
  meanings: Meaning[];
};

export type Props = {
  result?: Word[];
  savedItems?: Word[];
};

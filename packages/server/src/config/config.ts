import dotenv from 'dotenv';

dotenv.config();

interface Config {
  host: string;
  port: number;
  nodeEnv: string;
  dbName: string;
}

const config: Config = {
  host: 'mongodb+srv://boykovaekaterinai:justalearner9@cluster0.w8pkq.mongodb.net/?retryWrites=true&w=majority',
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbName: 'DICTIONARY_APP',
};

export default config;

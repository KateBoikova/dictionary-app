import dotenv from 'dotenv';

dotenv.config();

interface Config {
  host: string;
  port: number;
  nodeEnv: string;
  dbName: string;
}

const config: Config = {
  host: '',
  port: Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbName: 'DICTIONARY_APP',
};

export default config;

import dotenv from 'dotenv';

dotenv.config();

interface Config {
  host: string;
  port: number;
  nodeEnv: string;
}

const config: Config = {
  host: '127.0.0.1',
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;

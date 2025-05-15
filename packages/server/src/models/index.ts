import mongoose from 'mongoose';
import config from '../config/config';

const { Schema } = mongoose;

mongoose
  .connect(`mongodb://${config.host}:${config.port}/${config.nodeEnv}`)
  .then(data => console.log('Connection OK'))
  .catch(err => console.log('err', err));

module.exports.Word = require('./word');

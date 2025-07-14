import mongoose from 'mongoose';
import config from '../config/config';
// import Word from './word';

mongoose
  .connect(`${config.host}`)
  .then(() => console.log('Connection OK'))
  .catch(err => console.log('err', err));

export default mongoose;
// module.exports.Word = require('./word');
// export  {Word} from './word';

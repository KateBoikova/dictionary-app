import mongoose from 'mongoose';
import config from '../config/config';
// import Word from './word';

mongoose
  .connect(
    `mongodb+srv://boykovaekaterinai:justalearner9@cluster0.w8pkq.mongodb.net/${config.dbName}?retryWrites=true&w=majority`
  )
  .then(() => console.log('Connection OK'))
  .catch(err => console.log('err', err));

export default mongoose;
// module.exports.Word = require('./word');
// export  {Word} from './word';

import { useDispatch } from 'react-redux';
import styles from './SearchResults.module.scss';
import { save, del } from '../../features/saver/saverSlice.js';
import Delete from './Delete.js';
import Save from './Save.js';
import Snackbar from '../Snackbar/Snackbar.js';

export function SaveBtn (props) {
  const { result } = props;
  const dispatch = useDispatch();
  return (
    <button
      title='Save'
      className={`${styles.btn} ${styles.saveBtn}`}
      onClick={() => {
        dispatch(save({ result: result }));
        return <Snackbar show={true} />;
      }}
    >
      <Save />
    </button>
  );
}

export function DeleteBtn (props) {
  const { result } = props;
  let id = result[0].word;
  const dispatch = useDispatch();
  return (
    <button
      title='Delete from saved'
      className={`${styles.btn} ${styles.delBtn}`}
      onClick={() => {
        dispatch(del(id));
        return <Snackbar show={false} />;
      }}
    >
      <Delete />
    </button>
  );
}

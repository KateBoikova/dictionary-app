import { useDispatch } from 'react-redux';
import styles from './SearchResults.module.scss';
import { save, del } from '../../features/saver/saverSlice.js';
import Delete from './Delete.js';
import Save from './Save.js';

export function SaveBtn (props) {
  const { result } = props;
  const dispatch = useDispatch();
  return (
    <button
      title='Save'
      className={styles.btn}
      onClick={() => {
        dispatch(save({ result: result }));
      }}
    >
      <Save />
    </button>
  );
}

export function DeleteBtn (props) {
  const { result } = props;
  let id = result[0].word;
  console.log(id);
  const dispatch = useDispatch();
  return (
    <button
      title='Delete from saved'
      className={`${styles.btn} ${styles.delBtn}`}
      onClick={() => {
        dispatch(del(id));
      }}
    >
      <Delete />
    </button>
  );
}

import { useDispatch } from 'react-redux';
import styles from './Buttons.module.scss';
import { save, del } from '../../features/saver/saverSlice';
import Delete from '../SearchResults/Delete.js';
import Save from '../SearchResults/Save.js';
import Snackbar from '../Snackbar/Snackbar';
import { Word, Props } from '../../types/types';

function Buttons ({ result, savedItems }: Props) {
  const dispatch = useDispatch();
  let id: any = result[0].word;

  const canSave = (result: Word[], savedItems: Word[][]): boolean => {
    let wordResult = result[0].word;
    if (savedItems.length <= 0) {
      return true;
    }
    for (let i = 0; i < savedItems.length; i++) {
      if (savedItems[i][0].word === wordResult) {
        return false;
      }
    }
    return true;
  };

  const saveBtn = () => {
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
  };

  const deleteBtn = () => {
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
  };

  const renderBtn = canSave(result, savedItems) ? saveBtn() : deleteBtn();
  return <div className={styles.btnContainer}>{renderBtn}</div>;
}

export default Buttons;

// export function SaveBtn (props) {
//   const { result } = props;
//   const dispatch = useDispatch();
//   return (
//     <button
//       title='Save'
//       className={`${styles.btn} ${styles.saveBtn}`}
//       onClick={() => {
//         dispatch(save({ result: result }));
//         return <Snackbar show={true} />;
//       }}
//     >
//       <Save />
//     </button>
//   );
// }

// export function DeleteBtn (props) {
//   const { result } = props;
//   let id = result[0].word;
//   const dispatch = useDispatch();
//   return (
//     <button
//       title='Delete from saved'
//       className={`${styles.btn} ${styles.delBtn}`}
//       onClick={() => {
//         dispatch(del(id));
//         return <Snackbar show={false} />;
//       }}
//     >
//       <Delete />
//     </button>
//   );
// }

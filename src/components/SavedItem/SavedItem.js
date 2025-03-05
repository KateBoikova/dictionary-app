import { useState } from 'react';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import styles from './SavedItem.module.scss';

function SavedItem (props) {
  const { result } = props;
  const [isOpened, setIsOpened] = useState(false);
  let id = result[0].word;
  return (
    <div className={styles.savedContainer}>
      <div
        className={styles.title}
        onClick={() => {
          setIsOpened(!isOpened);
        }}
      >
        <h2>{id}</h2>
        <span className={styles.hideToggle}>{isOpened ? '-' : '+'}</span>
      </div>
      {isOpened && <SearchResultItem result={result} />}
    </div>
  );
}
export default SavedItem;

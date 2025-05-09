import { useState } from 'react';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import Buttons from '../Buttons/Buttons';
import styles from './SavedItem.module.scss';
import { Props } from '../../types/types';

function SavedItem ({ result, savedItems }: Props) {
  const [isOpened, setIsOpened] = useState(false);
  let id: any = result[0].word;
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
      {isOpened && (
        <>
          <SearchResultItem result={result} />
          <Buttons result={result} savedItems={savedItems} />
        </>
      )}
    </div>
  );
}
export default SavedItem;

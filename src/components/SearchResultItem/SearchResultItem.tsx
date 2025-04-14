import { v4 as uuidv4 } from 'uuid';
import styles from './SearchResultItem.module.scss';
import { Props } from '../../types/types';

function SearchResultItem (props: Props) {
  const { result } = props;

  return (
    <>
      {result.map(word => {
        return (
          <>
            <span className={styles.phonetics}>{word.phonetic}</span>
            <ul className={styles.wordMeanings}>
              {word.meanings.map(item => {
                return (
                  <li key={uuidv4()}>
                    <span className={styles.partOfSpeech}>
                      {item.partOfSpeech}
                    </span>
                    <ul className={styles.meanings}>
                      {item.definitions.map(definition => {
                        return (
                          <li key={uuidv4()} className={styles.meaning}>
                            {definition.definition}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}

export default SearchResultItem;

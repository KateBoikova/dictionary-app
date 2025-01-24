import { useDispatch } from 'react-redux';
import { save } from '../../features/saver/saverSlice.js';
import Save from './Save.js';
import styles from './SearchResults.module.scss';

function SearchResults (props) {
  const { result, input, isError } = props;
  const dispatch = useDispatch();
  console.log('result', result);
  if (isError) {
    return <p className={styles.message}>Nothing found</p>;
  }
  if (result.length > 0) {
    return (
      <div className={styles.resultsContainer}>
        <h2>{input}</h2>
        {result.map(word => {
          return (
            <>
              <span className={styles.phonetics}>{word.phonetic}</span>
              <ul className={styles.wordMeanings}>
                {word.meanings.map((meanings, index) => {
                  return (
                    <li key={word}>
                      <span className={styles.partOfSpeech}>
                        {meanings.partOfSpeech}
                      </span>
                      <ul className={styles.meanings}>
                        {meanings.definitions.map((definition, index) => {
                          return (
                            <li className={styles.meaning} key={index}>
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
        <button
          title='Save'
          className={styles.btn}
          onClick={() => dispatch(save(result))}
        >
          <Save className={styles.saveIcon} />
        </button>
      </div>
    );
  }
}

export default SearchResults;

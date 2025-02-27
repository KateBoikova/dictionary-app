import { connect } from 'react-redux';
import styles from './SearchResults.module.scss';
import { DeleteBtn, SaveBtn } from './Buttons.js';
import Snackbar from '../Snackbar/Snackbar.js';

const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};

function SearchResults (props) {
  const { result, isError, savedItems } = props;

  const canSave = (result, savedItems) => {
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

  if (isError) {
    return <p className={styles.message}>Nothing found</p>;
  }
  if (result.length > 0) {
    let id = result[0].word;
    return (
      <>
        <div className={styles.resultsContainer}>
          <h2>{id}</h2>
          {result.map(word => {
            return (
              <>
                <span className={styles.phonetics}>{word.phonetic}</span>
                <ul className={styles.wordMeanings}>
                  {word.meanings.map((meanings, id) => {
                    return (
                      <li key={id}>
                        <span className={styles.partOfSpeech}>
                          {meanings.partOfSpeech}
                        </span>
                        <ul className={styles.meanings}>
                          {meanings.definitions.map((definition, id) => {
                            return (
                              <li className={styles.meaning} key={id}>
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
          {canSave(result, savedItems) ? (
            <SaveBtn result={result} />
          ) : (
            <DeleteBtn result={result} />
          )}
          <Snackbar />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);

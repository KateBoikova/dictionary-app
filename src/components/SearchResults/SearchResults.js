import { connect } from 'react-redux';
import styles from './SearchResults.module.scss';
import { DeleteBtn, SaveBtn } from './Buttons.js';
import Snackbar from '../Snackbar/Snackbar.js';
import SearchResultItem from '../SearchResultItem/SearchResultItem.js';

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
    const renderBtn = canSave(result, savedItems) ? (
      <SaveBtn result={result} />
    ) : (
      <DeleteBtn result={result} />
    );
    let id = result[0].word;
    return (
      <>
        <div className={styles.resultsContainer}>
          <div className={styles.title}>
            <h2>{id}</h2>
          </div>
          <SearchResultItem result={result} />

          <div className={styles.btnContainer}> {renderBtn}</div>
          <Snackbar />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);

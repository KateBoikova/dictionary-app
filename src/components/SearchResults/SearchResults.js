import { connect } from 'react-redux';
import styles from './SearchResults.module.scss';
import Buttons from '../Buttons/Buttons.js';
import Snackbar from '../Snackbar/Snackbar.js';
import SearchResultItem from '../SearchResultItem/SearchResultItem.js';

const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};

function SearchResults (props) {
  const { result, isError, savedItems } = props;

  if (isError) {
    return <p className={styles.message}>Nothing found</p>;
  }

  if (result.length > 0) {
    <Buttons result={result} savedItems={savedItems} />;
    let id = result[0].word;
    return (
      <>
        <div className={styles.resultsContainer}>
          <div className={styles.title}>
            <h2>{id}</h2>
          </div>
          <SearchResultItem result={result} />
          <Buttons result={result} savedItems={savedItems} />;
          <Snackbar />
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps)(SearchResults);

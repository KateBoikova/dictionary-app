import { connect, ConnectedProps } from 'react-redux';
import styles from './SearchResults.module.scss';
import Buttons from '../Buttons/Buttons';
import Snackbar from '../Snackbar/Snackbar.js';
import SearchResultItem from '../SearchResultItem/SearchResultItem';
import { Word } from '../../types/types';

interface RootState {
  saver: { saved: Word[] };
}

const mapState = (state: RootState) => {
  const { saver } = state;
  return { savedItems: saver.saved };
};

const connector = connect(mapState);
type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  result: any;
  isError: boolean;
  savedItems: Word[];
}

function SearchResults (props: Props) {
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
          <Buttons result={result} savedItems={savedItems} />
          <Snackbar />
        </div>
      </>
    );
  }
}

export default connector(SearchResults);

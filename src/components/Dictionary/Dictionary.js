import { useContext, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Dictionary.module.scss';
import SearchResults from '../SearchResults/SearchResults';

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

// const mapStateToProps = state => {
//   const { saver } = state;
//   return { savedWordsList: saver.saved };
// };

function Dictionary (props) {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);

  // const { savedWordsList } = props;
  // console.log('savedWordsList', savedWordsList);

  // const savedWordsDB = new Set();

  // function createSavedWordsDB (savedWordsDB, savedWordsList) {
  //   savedWordsList.forEach(item => {
  //     savedWordsDB.add(item[0]);
  //   });
  //   return savedWordsDB;
  // }

  const fetchResult = async value => {
    try {
      const response = await fetch(url + value);
      if (!response.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      const result = await response.json();
      setIsError(false);
      setResult(result);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    // return <p>Nothing found</p>;
  }
  const searchHandler = (e, input) => {
    e.preventDefault();
    fetchResult(input);
  };

  return (
    <div className={`${styles.mainContainer} `}>
      <main className={styles.searchContainer}>
        <form id='form' className={styles.inputBar}>
          <input
            type='search'
            name='request'
            tabIndex='0'
            placeholder='Search for a word or a phrase...'
            onChange={e => setInput(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.btn} onClick={e => searchHandler(e, input)}>
            Search
          </button>
        </form>

        {/* {createSavedWordsDB()} */}
        {
          <SearchResults
            result={result}
            isError={isError}
            // savedWordsDB={savedWordsDB}
          />
        }
      </main>
    </div>
  );
}

export default Dictionary;

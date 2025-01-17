import { useContext, useState } from 'react';
import styles from './Dictionary.module.scss';
import SearchResults from '../SearchResults/SearchResults';

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function Dictionary () {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [isError, setIsError] = useState(false);

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
            placeholder='Search for a word or a phrase...'
            onChange={e => setInput(e.target.value)}
            className={styles.searchInput}
          />
          <button className={styles.btn} onClick={e => searchHandler(e, input)}>
            Search
          </button>
        </form>
        {<SearchResults result={result} input={input} isError={isError} />}
      </main>
    </div>
  );
}

export default Dictionary;

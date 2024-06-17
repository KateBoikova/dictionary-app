import { useState, useEffect } from 'react';
// import NavBar from './components/NavBar';
// import SearchBar from './components/SearchBar';
// import SearchResults from './components/SearchResults';
// import Theme from './components/Theme';
import styles from './Dictionary.module.scss';

const url = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

function Dictionary () {
  const [input, setInput] = useState('');
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
      setResult(result);
      console.log(result);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There has been an error...</h2>;
  }

  const searchHandler = (e, input) => {
    e.preventDefault();
    fetchResult(input);
    console.log(input);
  };
  // const { word, phonetic, phonetics, origin, meanings } = result;

  return (
    <div className={styles.mainContainer}>
      <header className={styles.headerBar}>
        <nav className={styles.navBar}>
          <ul>
            <li>
              <a href='#'>Quizzes</a>
            </li>
            <li>
              <a href='#'>Saved</a>
            </li>
            <li>
              <a href='#'>Folders</a>
            </li>
          </ul>
        </nav>
        <button className={styles.btnToggle}>Theme toggle</button>
      </header>
      <main className={styles.searchContainer}>
        <form id='form'>
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

        <div className={styles.resultsContainer}>
          <p>
            <span>{input}</span>
            {result.map(word => {
              return (
                <>
                  <span>{word.phonetic}</span>
                  <span>
                    {word.meanings.map(meanings => {
                      return (
                        <span>
                          {meanings.partOfSpeech}{' '}
                          {meanings.definitions.map(definition => {
                            return (
                              <ul>
                                <li key='{definition.definition}'>
                                  {definition.definition}
                                </li>
                              </ul>
                            );
                          })}
                        </span>
                      );
                    })}
                  </span>
                </>
              );
            })}
            {/* <span className={styles.phonetics}>{phonetics}</span>
            <span className={styles.meanings}>{meanings}</span> */}
          </p>
          <button className={styles.btn}>Add</button>
        </div>
      </main>
    </div>
  );
}

export default Dictionary;

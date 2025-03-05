import styles from './SearchResultItem.module.scss';

function SearchResultItem (props) {
  const { result } = props;

  return result.map(word => {
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
  });
}
export default SearchResultItem;

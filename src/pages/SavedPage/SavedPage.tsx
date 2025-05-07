import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './SavedPage.module.scss';
import SavedItem from '../../components/SavedItem/SavedItem';
import { Props } from '../../types/types';

function SavedPage (props: Props) {
  const { savedItems } = props;
  console.log('savedItems', savedItems);

  if (savedItems.length === 0) {
    return (
      <main className={styles.container}>
        <p className={styles.nothingSaved}>
          Nothing has been saved yet.{' '}
          <a className={styles.link} href='/'>
            Return to search
          </a>
        </p>
      </main>
    );
  }
  if (savedItems) {
    return (
      <main className={styles.container}>
        {savedItems.map(items => {
          return (
            <SavedItem key={uuidv4()} result={items} savedItems={savedItems} />
          );
        })}
      </main>
    );
  }
}
const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};
export default connect(mapStateToProps)(SavedPage);

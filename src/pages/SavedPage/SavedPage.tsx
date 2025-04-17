import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import styles from './SavedPage.module.scss';
import SavedItem from '../../components/SavedItem/SavedItem';
import { Word, Props } from '../../types/types';

function SavedPage (props) {
  const { savedItems } = props;
  // return
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
  if (!savedItems) {
    return <p>Nothing is saved yet</p>;
  }
}
const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};
export default connect(mapStateToProps)(SavedPage);

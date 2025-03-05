import { connect } from 'react-redux';
import styles from './SavedPage.module.scss';
import SavedItem from '../../components/SavedItem/SavedItem';

function SavedPage (props) {
  const { savedItems } = props;
  return (
    <main className={styles.container}>
      {savedItems.map(items => {
        return <SavedItem result={items} />;
      })}
    </main>
  );
}
const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};
export default connect(mapStateToProps)(SavedPage);

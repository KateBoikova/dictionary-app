import { useDispatch, connect } from 'react-redux';
import { del } from '../../features/saver/saverSlice';
import SearchResults from '../../components/SearchResults/SearchResults';

function SavedPage (props) {
  const { savedItems } = props;
  console.log('savedItems', savedItems);
  // const savedItems = useSelector(state => state.saver.saved);
  const dispatch = useDispatch();

  return (
    <main>
      {savedItems.map(item => (
        <SearchResults result={[item]} />
      ))}
    </main>
  );
}
const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};
export default connect(mapStateToProps)(SavedPage);

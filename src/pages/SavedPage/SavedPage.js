import { useDispatch, connect } from 'react-redux';
import { del } from '../../features/saver/saverSlice';
import SearchResults from '../../components/SearchResults/SearchResults';

function SavedPage (props) {
  const { savedItems } = props;
  // const savedItems = useSelector(state => state.saver.saved);
  const dispatch = useDispatch();
  return (
    <main>
      {savedItems.map(items => {
        return <SearchResults result={items} />;
      })}
    </main>
  );
}
const mapStateToProps = state => {
  const { saver } = state;
  return { savedItems: saver.saved };
};
export default connect(mapStateToProps)(SavedPage);

import styles from './Snackbar.module.scss';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import useIsMounted from '../../hooks/useIsMounted';

const mapStateToProps = state => {
  const {
    saver: { snackbarMessage, snackbarStatus },
  } = state;
  return { snackbarMessage, snackbarStatus };
};

function Snackbar (props) {
  const { snackbarMessage, snackbarStatus } = props;
  const [hide, setHide] = useState(true);

  let isMounted = useIsMounted();

  const hideSnackbar = () => {
    setHide(false);
    setTimeout(() => {
      setHide(true);
    }, 3000);
  };

  useEffect(() => {
    if (isMounted) {
      return;
    } else {
      hideSnackbar();
    }
  }, [snackbarMessage, snackbarStatus]);

  const showSnackbar = (snackbarMessage, snackbarStatus) =>
    snackbarStatus ? (
      <span>{snackbarMessage}</span>
    ) : (
      <span>{snackbarMessage}</span>
    );

  return (
    <>
      {!hide ? (
        <div className={styles.snackbar}>
          {showSnackbar(snackbarMessage, snackbarStatus)}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default connect(mapStateToProps)(Snackbar);

import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage/SearchPage';
import SavedPage from './pages/SavedPage/SavedPage';
// import FoldersPage from './pages/FoldersPage/FoldersPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ThemeContext } from './context/ThemeContext';
import styles from './theme.module.scss';

function App () {
  const { darkTheme } = useContext(ThemeContext);
  const theme = darkTheme ? styles.darkTheme : styles.lightTheme;

  return (
    <div className={`${theme} ${styles.theme}`}>
      <Header />
      <Routes>
        <Route path='/' element={<SearchPage />} />

        <Route path='/saved' element={<SavedPage />} />
        {/* <Route path='/folders' element={<FoldersPage />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

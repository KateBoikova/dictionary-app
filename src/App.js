import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import QuizzesPage from './pages/QuizzesPage/QuizzesPage';
import SavedPage from './pages/SavedPage/SavedPage';
import FoldersPage from './pages/FoldersPage/FoldersPage';
import Header from './components/Header/Header';
import { ThemeContext } from './context/ThemeContext';
import styles from './theme.module.scss';
import { enableMapSet } from 'immer';
enableMapSet();

function App () {
  const { darkTheme } = useContext(ThemeContext);
  const theme = darkTheme ? styles.darkTheme : styles.lightTheme;
  return (
    <div className={`${theme} ${styles.theme}`}>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quizzes' element={<QuizzesPage />} />
        <Route path='/saved' element={<SavedPage />} />
        <Route path='/folders' element={<FoldersPage />} />
      </Routes>
    </div>
  );
}

export default App;

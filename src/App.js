import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage/HomePage';
import QuizzesPage from './pages/QuizzesPage/QuizzesPage';
import SavedPage from './pages/SavedPage/SavedPage';
import FoldersPage from './pages/FoldersPage/FoldersPage';

function App () {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/quizzes' element={<QuizzesPage />} />
        <Route path='/saved' element={<SavedPage />} />
        <Route path='/folders' element={<FoldersPage />} />
      </Routes>
    </>
  );
}

export default App;

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import BookStore from './root/BookStore';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookStore />} />
      </Routes>
    </>
  );
}

export default App;

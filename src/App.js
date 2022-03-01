import './App.scss';
import { Routes, Route } from 'react-router-dom';
import BookStore from './root/BookStore';
import SignIn from './components/Authentication/SignIn/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookStore />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;

import './App.scss';
import { Routes, Route } from 'react-router-dom';
import BookStore from './root/BookStore';
import SignIn from './components/Authentication/SignIn/SignIn';
import Dashboard from './components/PrivatePage/DashBoard/DashBoard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookStore />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

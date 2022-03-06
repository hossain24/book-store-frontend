import './App.scss';
import { Routes, Route } from 'react-router-dom';
import BookStore from './root/BookStore';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignIn/SignIn';
import DashBoard from './components/PrivatePage/DashBoard/DashBoard';
import OrderList from './components/PrivatePage/OrderList/OrderList';
import Private from './components/PrivatePage/Private/Private';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BookStore />} exact />
        <Route path="signin" element={<SignIn />} exact />
        <Route path="dashboard" element={<DashBoard />} exact />
        <Route path='/order-list' element={<OrderList />} exact />
        <Route path="/private" element={<Private />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </>
  );
}

export default App;

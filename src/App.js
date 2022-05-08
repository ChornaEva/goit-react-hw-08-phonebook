import './App.css';
import Register from 'pages/Register';
import Login from 'pages/Login';
import AppBar from 'AppBar';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operation';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;

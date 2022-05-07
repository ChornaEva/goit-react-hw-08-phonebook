import './App.css';
import Register from 'pages/Register';
import Login from 'pages/Login';
import AppBar from 'AppBar';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import { Routes, Route } from 'react-router-dom';

const App = () => {
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

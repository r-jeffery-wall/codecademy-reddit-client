import React, { useEffect } from 'react';
import { Header } from './features/header/Header';
import './App.scss';
import { PostsList } from './features/posts/PostsList';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate, selectAccessToken } from './features/auth/AuthSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authenticate())
  })

  return (
    <div className="App">
      <Header />
      <PostsList />
    </div>
  );
}

export default App;

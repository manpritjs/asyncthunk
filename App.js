// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessage } from './features/apiSlice';

function App() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.api.message);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Toolkit with Express API</h1>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'succeeded' && <p>{message}</p>}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
}

export default App;


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'assets/index.css';
import { BrowserRouter } from 'react-router-dom';
import Navigation from 'utils/route';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'redux/createSlice';
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const store = configureStore({
  reducer: {
    user: userReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
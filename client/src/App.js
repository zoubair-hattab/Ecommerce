import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataProvider } from './GlobalState';
import Header from './components/headers/Header';
import MainPages from './components/mainpages/Pages';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
  return (
    <PayPalScriptProvider
      options={{ 'client-id': process.env.REACT_APP_PAYPAL_CLIENT_ID }}
    >
      <DataProvider>
        <Router>
          <div className="App">
            <Header />
            <MainPages />
          </div>
        </Router>
      </DataProvider>
    </PayPalScriptProvider>
  );
}

export default App;

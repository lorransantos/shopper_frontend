import React from 'react';
import GlobalProvider from './global/GlobalProvider';
import Router from './routes/Router';

const App = () => {
  return (
    <GlobalProvider>
      <div>
        <Router />
      </div>
    </GlobalProvider>
  );
};

export default App;

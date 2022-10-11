import React from 'react';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';

const App = () => {
  return (
    <GlobalState>
      <div>
        <Router />
      </div>
    </GlobalState>
  );
};

export default App;

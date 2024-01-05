import React from 'react';
import { Provider } from './Context/Provider';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
};

export default App;

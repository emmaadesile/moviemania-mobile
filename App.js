import React from 'react';
import { Provider } from './context';
import AppNavigator from './navigator/AppNavigator';

export default function App() {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}

import React from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';

import NewsState from './context/News/NewsState';
import StackNavigator from './navigators/StackNavigator';

const App = () => {
  return (
    <NewsState>
      <NavigationContainer onReady={() => BootSplash.hide()}>
        <StackNavigator />
      </NavigationContainer>
    </NewsState>
  );
};

export default App;

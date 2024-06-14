import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './src/Navigation/HomeNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeNavigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

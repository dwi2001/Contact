import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from './src/Navigation/HomeNavigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';
import SplashScreen from 'react-native-splash-screen';
import {Platform} from 'react-native';

function App(): React.JSX.Element {
  useEffect(() => {
    {
      Platform.OS === 'ios' ? SplashScreen.hide() : null;
    }
  }, []);

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

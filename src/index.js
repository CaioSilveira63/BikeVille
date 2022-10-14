import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import ThemeContext from './Contexts/ThemeContext';
import Themes from './Themes/Themes';
import Login from './login';
import Register from './register';
import Main from './main';

import { StatusBar } from 'react-native';
import QRCode from './QRCode';
import Map from './map';
import Report from './Report';

const Stack = createNativeStackNavigator();

function App() {
  const [Theme, setTheme] = React.useState(1);

  return (
    <ThemeContext.Provider value={[Theme, setTheme]}>
      <PaperProvider theme={Themes[Theme]}>
        <StatusBar
          barStyle={Theme === 1 ? 'light-content' : 'dark-content'}
          backgroundColor={Themes[Theme].colors.surface}
        />
        <NavigationContainer theme={Themes[Theme]}>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={Register}
            />
            <Stack.Screen
              options={{
                title: 'Bike Ville',
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
              name="Main"
              component={Main}
            />
            <Stack.Screen
              options={{
                title: 'Escanear QRCode',
                headerBackButtonMenuEnabled: false,
                headerBackTitle: "Voltar"
              }}
              name="QRCode"
              component={QRCode}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Map"
              component={Map}
            />
            <Stack.Screen
              options={{
                title: 'Reportar Dano',
                headerBackButtonMenuEnabled: false,
                headerBackVisible: false,
              }}
              name="Report"
              component={Report}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
}

export default App;

import {
    MD2LightTheme as DefaultTheme,
    MD2DarkTheme as DefaultDarkTheme,
  } from 'react-native-paper';
  import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
  } from '@react-navigation/native';
  import merge from 'deepmerge';
  
  export const LightTheme = {
    Type: 'light',
    ...DefaultTheme,
    roundness: 2,
    version: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2ECC71',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3',
    },
  };
  
  export const DarkTheme = {
    Type: 'dark',
    ...DefaultDarkTheme,
    roundness: 2,
    version: 2,
    colors: {
      ...DefaultDarkTheme.colors,
      primary: '#2ECC71',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3',
    },
  };
  
  const CombinedDefaultTheme = merge(LightTheme, NavigationDefaultTheme);
  const CombinedDarkTheme = merge(DarkTheme, NavigationDarkTheme);
  
  const Themes = [CombinedDefaultTheme, CombinedDarkTheme];
  
  export default Themes;
  
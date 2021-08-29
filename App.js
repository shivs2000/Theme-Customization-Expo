import * as React from 'react';
import { Text, View,StyleSheet } from 'react-native';
import AppBar from './src/components/AppBar';

import { NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme
 } from '@react-navigation/native';

 import { Provider, useSelector } from 'react-redux';
import store from './src/store/index'
import { 
  createBottomTabNavigator 
} from '@react-navigation/bottom-tabs';

import { 
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme, 
  Provider as PaperProvider,
  Card, 
  Title,
   Paragraph ,
  Appbar} 
  from 'react-native-paper'


import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



import HomeScreen from './src/components/Home';
import SettingsScreen from './src/components/Settings';
import Account from './src/components/Account';
import { State } from 'react-native-gesture-handler';
import Main from './src/Main';

 



const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
    <Provider store={store}>
    <Main/>
    </Provider>

  );
}
const styles=StyleSheet.create({


})
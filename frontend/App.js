import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home'
import Login from './pages/Login'

const AppSwitchNavigator = createSwitchNavigator({
  Home: Home,
  Login: Login,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)

export default function App() {
  return (
    <AppNavigator />
    // <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

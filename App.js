import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeScreen',
    title: 'FaceOff',
  }
});
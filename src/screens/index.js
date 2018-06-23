import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import Camera from './Camera';

export function registerScreens() {
    Navigation.registerComponent('HomeScreen', () => HomeScreen);
    Navigation.registerComponent('Camera', () => Camera);
}
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './src/screens';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
      root: {
          children: [
            {
              stack: {
                id: 'HOME_SCREEN',
                children: [
                  {
                    component: {
                      name: 'HomeScreen',
                      option: {
                        topBar: {
                          visible: true,
                          title: {text: 'FaceOff'}
                        }
                      } 
                    },
                    component: {
                      name: 'Camera',
                      option: {topBar: {visible: false}}
                    } 
                  }
                ]
              }
            }
          ]
      }
    });
});


type Props = {};
export default class App extends Component<Props> {
  render() {
    return ( 
      <View style={{ flex: 1 }}>

      </View>
    );
  }
}

import React, { PureComponent } from 'react';
import { Platform, StyleSheet } from 'react-native';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import { Header } from '../components/Header';
import { Navigation } from 'react-native-navigation';
import { ConnectionStatusBar } from 'react-native-ui-lib/src';


const instructions = Platform.select({
  ios: 'are you ready?,\n' +
    'Do not blink!',
  android: 'Challenge you friends, make them cry!\n' +
    '\nDo you have what it takes?\n\n',
});

export default class HomeScreen extends PureComponent {

    showCameraScreen = (string) => {
        this.props.navigator.push({
            screen: string
        });
    };

  render() {
    return ( 
      <View style={{ flex: 1 }}>
      <Header headerText="FaceOff" />
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to FaceOff!
          </Text>
          <Text style={styles.instructions}>
            The most awesome staring contest
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
          <View bottom>
            <Button 
              label="Start"
              onPress={() => this.showCameraScreen('Camera')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


import React, { PureComponent } from 'react';
import { Platform, StyleSheet } from 'react-native';
import {View, TextInput, Text, Button} from 'react-native-ui-lib';
import { Navigation } from 'react-native-navigation';
import { ConnectionStatusBar } from 'react-native-ui-lib/src';


const instructions = Platform.select({
  ios: 'are you ready?,\n' +
    'Do not blink!',
  android: 'Challenge you friends, make them cry!\n' +
    '\nDo you have what it takes?\n',
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
          <View style={styles.button} >
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
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 15,
    color: '#333333',
    marginBottom: 5,
  },
  button: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center'     
  }
});


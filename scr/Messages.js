import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Messages extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Messages',
      headerTintColor: '#ffffff',
      headerStyle: {
        backgroundColor: '#14AB7A',
      }
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Messages</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
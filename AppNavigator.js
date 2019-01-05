import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Album = () => (
  <View style={styles.container}>
    <Text>Album</Text>
  </View>
);

const Library = () => (
  <View style={styles.container}>
    <Text>Library</Text>
  </View>
);

const Favorites = () => (
  <View style={styles.container}>
    <Text>Favorites</Text>
  </View>
);

const Purchased = () => (
  <View style={styles.container}>
    <Text>Purchased</Text>
  </View>
);

const tabBarIcon = name => ({ tintColor }) => (
  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

const BottomTabMaterial = createMaterialBottomTabNavigator(
  {
    Album: {
      screen: Album,
      navigationOptions: {
        tabBarIcon: tabBarIcon('photo-album')
      }
    },
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarIcon: tabBarIcon('inbox')
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: tabBarIcon('favorite')
      }
    },
    Purchased: {
      screen: Purchased,
      navigationOptions: {
        tabBarIcon: tabBarIcon('shop')
      }
    },
  },
  {
    shifting: false,
    activeColor: '#6200ee',
    inactiveColor: '#828792',
    barStyle: {
      backgroundColor: '#f8f7f9',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderStyle: 'solid',
      borderColor: '#d0cfd0',
    },
  }
);

export default createAppContainer(BottomTabMaterial);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
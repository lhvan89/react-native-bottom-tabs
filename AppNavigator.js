import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Dashboard from './scr/Dashboard';
import Lease from './scr/Lease';
import Messages from './scr/Messages';
import Profile from './scr/Profile';
import Search from './scr/Search';

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
    Dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{
            width: 21,
            height: 21,
          }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_dashboard_active.png') : require('./assets/images/bottom_tabbar/tabbar_dashboard.png')} />
        ),
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{
            width: 21,
            height: 21,
          }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_search_active.png') : require('./assets/images/bottom_tabbar/tabbar_search.png')} />
        ),
      }
    },
    Lease: {
      screen: Lease,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{
            width: 21,
            height: 21,
          }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_lease_active.png') : require('./assets/images/bottom_tabbar/tabbar_lease.png')} />
        ),
      }
    },
    Messages: {
      screen: Messages,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{
            width: 21,
            height: 20,
          }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_messages_active.png') : require('./assets/images/bottom_tabbar/tabbar_messages.png')} />
        ),
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image style={{
            width: 21,
            height: 21,
          }} source={focused ? require('./assets/images/bottom_tabbar/tabbar_profile_active.png') : require('./assets/images/bottom_tabbar/tabbar_profile.png')} />
        ),
      }
    },
  },
  {
    shifting: false,
    activeColor: '#51C9A2',
    inactiveColor: '#2D3236',
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
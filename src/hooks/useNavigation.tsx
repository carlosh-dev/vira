import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home } from '../screens/Home';
import { SignInCity } from '../screens/SignInCity';



Icon.loadFont();

const mainNavigation = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }:any) => (
          <Icon name="lock" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
    Dashboard: {
      screen: SignInCity,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }:any) => (
          <Icon name="rocket" size={20} color={focused ? '#fff' : '#ddd'} />
        ),
      }),
    },
  },
  {
    barStyle: {
      backgroundColor: '#7159c1',
    },
  },
);

export default createBottomTabNavigator(mainNavigation);
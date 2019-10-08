import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ShowQuestions from '../screens/ShowQuestions';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Questions : ShowQuestions,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Sujets',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  ),
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Proposer',
  tabBarIcon: ({ focused }) => (<TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'} />
  ),
};

LinksStack.path = '';


const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
});

tabNavigator.path = '';

export default tabNavigator;

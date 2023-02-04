import React, {useState, useEffect} from 'react';
import {
  Image
} from 'react-native';


import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MoreScreen from '../screens/MoreScreen';
import MyTabBar from '../components/MyTab';
import LanguageScreen from '../screens/LanguageScreen';
import LoginModal from '../screens/LoginScreen';
import MovieList from '../screens/MovieList';



const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const MoreStack = createStackNavigator();
const Tabs = createBottomTabNavigator();


export const LoginStackScreen = () => (
  <AuthStack.Navigator headerMode="false">
    <AuthStack.Screen
      name="LoginModal"
      component={LoginModal}
      options={{title: 'Sign In', headerShown: false}}
    />
  </AuthStack.Navigator> 
);

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={MovieList}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#fff8e5',
          elevation: 0,
        },

        headerTitleStyle: {
          alignSelf: 'center',
          fontFamily: 'Poppins-Medium',
          fontSize: 16,
          color: '#20201f',
        },
      }}
    />

  
  </HomeStack.Navigator>
);



const MoreStackScreen = () => (
  <MoreStack.Navigator>
    <MoreStack.Screen
      name="More"
      component={MoreScreen}
      options={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f5f6f6',
          elevation: 0,
          borderBottomColor: '#e3e3e3',
          borderBottomWidth: 1,
        },
       
      }}
    />
 <HomeStack.Screen
      name="ChangeLanguage"
      component={LanguageScreen}
      options={{
        headerShown: false,
      }}
    />
   
  </MoreStack.Navigator>
);

export const TabsScreen = () => (
  <Tabs.Navigator
    tabBar={props => <MyTabBar {...props} />}
    tabBarOptions={{keyboardHidesTabBar: true}}>
    <Tabs.Screen name="Home" component={HomeStackScreen} />

    <Tabs.Screen
      name="More"
      component={MoreStackScreen}
      options={{
        tabBarIcon: ({size, color, focused}) => {
          <Image
            source={
              focused
                ? require('../assets/images/btn_more_select_community.png')
                : require('../assets/images/homei.png')
            }
          />;
        },
      }}
    />
  </Tabs.Navigator>
);

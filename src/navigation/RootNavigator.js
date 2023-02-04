import React, { useMemo } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TabsScreen,LoginStackScreen } from './MainTabNavigator';

const RootStack = createStackNavigator();
export const RootStackScreen = ({ isUserLoggedIn }) => (
    <RootStack.Navigator headerMode="none">
        {isUserLoggedIn? (
            <RootStack.Screen
                name="App"
                component={TabsScreen}
                options={{
                animationEnabled: false
                }}
            />
        ) : 
        (
            <RootStack.Screen
                name="Auth"
                component={LoginStackScreen}
                options={{
                animationEnabled: false
                }}
            />
        )
        }
    </RootStack.Navigator>
);
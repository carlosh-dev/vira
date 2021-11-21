import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from '../global/styles/theme';
import { Home } from '../screens/Home';
import { MaterialIcons } from '@expo/vector-icons'
import { MyPatterns } from '../screens/MyPatterns';
import { GradientBackground } from '../components/GradientBackground';

const  AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return(
        <AppTab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarActiveTintColor: theme.colors.white,
                tabBarInactiveTintColor: theme.colors.grey,
                tabBarActiveBackgroundColor: theme.colors.secondary,
                tabBarInactiveBackgroundColor: theme.colors.primary,
                tabBarStyle: {
                    borderTopColor: 'transparent',
                    borderRadius: 20,
                }
            }}
            
        >
        <AppTab.Screen
            name={'Início'}
            component={Home}
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                        name={'directions-bike'}
                        size={size}
                        color={color}
                    />
                ))
            }}

            
        />

        <AppTab.Screen
            name={'Meus Padrões'}
            component={MyPatterns}
            options={{
                tabBarIcon: (({size, color}) => (
                    <MaterialIcons
                        name={'format-list-bulleted'}
                        size={size}
                        color={color}
                    />
                ))
            }}
        />

        </AppTab.Navigator>
    )
}


export default AuthRoutes;

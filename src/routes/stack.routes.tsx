import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome';
import { UserNameScreen } from '../screens/UserNameScreen';
import { CityScreen } from '../screens/CityScreen';
import { Home } from '../screens/Home';

const stackRoutes = createNativeStackNavigator();

const AppRoutes: React.FC = () => ( 
    <stackRoutes.Navigator
        screenOptions={{ 
            headerShown: false,
            contentStyle: {
                backgroundColor: 'transparent',
            }
        }}
    >
        <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        />

        <stackRoutes.Screen 
            name="UserNameScreen"
            component={UserNameScreen}
        />

        <stackRoutes.Screen 
            name="CityScreen"
            component={CityScreen} 
        />

        <stackRoutes.Screen 
            name="Home"
            component={Home} 
        />

    </stackRoutes.Navigator>
);

export default AppRoutes;


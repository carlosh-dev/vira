import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome';
import { UserName } from '../screens/UserName';
import { CityScreen } from '../screens/CityScreen';

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
            name="UserName"
            component={UserName}
        />

        <stackRoutes.Screen 
            name="CityScreen"
            component={CityScreen}
        />

    </stackRoutes.Navigator>
);

export default AppRoutes;


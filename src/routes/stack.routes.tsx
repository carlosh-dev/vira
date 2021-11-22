import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Welcome } from '../screens/Welcome';
import { UserNameScreen } from '../screens/UserNameScreen';
import { CityScreen } from '../screens/CityScreen';
import { NewPattern } from '../screens/NewPattern';
import AuthRoutes from './tab.routes';

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
            component={AuthRoutes} 
        />     

        <stackRoutes.Screen 
            name="MyPatterns"
            component={AuthRoutes} 
        />     

        <stackRoutes.Screen 
            name="NewPattern"
            component={NewPattern} 
        />    

         

        
    </stackRoutes.Navigator>
);

export default AppRoutes;


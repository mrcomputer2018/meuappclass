import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTab from '../pages/HomeTab';
import Detalhes from '../pages/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackRoutes() { 
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'
                component={ HomeTab }
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name='Detalhes'
                component={ Detalhes }
            />
        </Stack.Navigator>
    );
}
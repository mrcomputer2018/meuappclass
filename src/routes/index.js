/* configuracao de rotas padroes */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackRoutes from '../routes/stackRoutes';
import SobreTab from '../pages/SobreTab';
import ContatoTab from '../pages/ContatoTab';

import Feather from 'react-native-vector-icons/Feather';

const Tab =  createBottomTabNavigator();

export default function Routes() {
    return(       
        <Tab.Navigator
        screenOptions={{
            /* esconde a header */
            headerShown: false,
            /* esconde a tabBar */
            tabBarHideOnKeyboard: true,
            /* esconde a label da tabBar */
            tabBarShowLabel: false,
            /* cor do item ativo*/
            tabBarActiveTintColor: '#fff',
            /* personalizar a tabBar */
            tabBarStyle: {
                backgroundColor: '#202225'
            }
        }}
        >
            <Tab.Screen
                name="HomeSatck"
                component={ StackRoutes }
                options={{
                /*  tabBarLabel: "Inicio", */
                    tabBarIcon: ({ color, size }) => {
                        return <Feather 
                                name="home" 
                                color={ color } 
                                size={ size }
                                />
                    }
                }}
            />

            <Tab.Screen
                name="Sobre"
                component={ SobreTab }
                options={{
                    tabBarIcon: ({ color, size }) => {
                        return <Feather 
                                name="file-text"
                                color={ color }
                                size={ size }
                                />;
                    }
                }}
            />

            <Tab.Screen
                name="Contato"
                component={ ContatoTab }
                options={{
                    /* remove o header */
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Feather 
                                name="phone-call"
                                color={ color }
                                size={ size }
                                />;
                    }
                }}
            />

        </Tab.Navigator>
    );
};
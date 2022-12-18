import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './src/pages/HomeTab';
import SobreTab from './src/pages/SobreTab';
import ContatoTab from './src/pages/ContatoTab';

import Feather from 'react-native-vector-icons/Feather';

const Tab =  createBottomTabNavigator();

export default function App() {
    return(
        <NavigationContainer>
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
                    name="Home"
                    component={ HomeTab }
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
        </NavigationContainer>
    );
};
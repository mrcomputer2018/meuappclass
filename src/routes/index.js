import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackRoutes from "./stackRoutes";
import Sobre from "../pages/SobreTab";
import Contato from "../pages/Detalhes";

import CustomDrawer from "../components/customDrawer";

import Feather from "react-native-vector-icons/Feather";

const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator
        /* componente que sera renderizado */
        drawerContent={ CustomDrawer }
        screenOptions={{
            headerShown: false,
           /*  drawerStyle: {
                backgroundColor: '#121212',
            }, */
            drawerActiveBackgroundColor: '#00dee4',
            /* cor do texto ativo */
            drawerActiveTintColor:'#ffff',
            drawerInactiveBackgroundColor: '#f1f1f1',
            drawerInactiveTintColor: '#000000',
        }}
        >
            <Drawer.Screen
            name="Home"
            component={ StackRoutes }
            options={{
                title: 'Inicio',
                drawerIcon: 
                ({ focused, color, size }) => <Feather 
                    color={color} 
                    size={size} 
                    name={focused ? 'home' : 'home'} 
                />
            }}
            />

            <Drawer.Screen
            name="Sobre"
            component={ Sobre }
            options={{
                drawerIcon: 
                ({ focused, color, size }) => <Feather 
                    color={color} 
                    size={size} 
                    name={focused ? 'file-text' : 'file-text'} 
                />
            }}
            />

            <Drawer.Screen
            name="Contato"
            component={ Contato }
            options={{
                drawerIcon: 
                ({ focused, color, size }) => <Feather 
                    color={color} 
                    size={size} 
                    name={focused ? 'phone-call' : 'phone-call'} 
                />
            }}
            />
        </Drawer.Navigator>
    );
}
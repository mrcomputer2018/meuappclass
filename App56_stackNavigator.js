import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

/* tipo de navegacao que quero usar */
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Sobre from './src/pages/Sobre';
import Contato from './src/pages/Contato';

/* configuração de rota */
const Stack = createNativeStackNavigator();

export default function App() {
    return(
        <NavigationContainer>
            {/* tipo de navegacao */}
            <Stack.Navigator>

                {/* minhas paginas */}
                <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Tela inicial',
                    headerStyle: {
                        backgroundColor: '#121212',
                    },
                    headerTintColor: '#fff',
                    headerShown: false,
                }}
                />

                <Stack.Screen
                name="Sobre"
                component={Sobre}
                />

                <Stack.Screen
                name="Contato"
                component={Contato}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
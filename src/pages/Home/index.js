import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate('Sobre', {
           nome: 'Marcelo',
           email: 'marcelo@marcelo.com.br',
        });
    }

    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Tela Home</Text>
            <Button 
            title='ir para sobre' 
            onPress={ navegaSobre }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: { 
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
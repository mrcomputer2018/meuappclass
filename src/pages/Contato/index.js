import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato( ) {

    const navigation = useNavigation();

    function handleHome() {
        /* voltando para o inicio */
        navigation.dispatch( StackActions.popToTop() );
    }

    return(
        <View style={ styles.container }>
            <Text  style={ styles.title }>Pagina Contato</Text>
            <Button
            title='Voltar para Home' 
            onPress={ handleHome }
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
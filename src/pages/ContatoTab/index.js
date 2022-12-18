import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function CoontatoTab() {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Pagina Contato</Text>
        </View>
    );
};

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
    }
});
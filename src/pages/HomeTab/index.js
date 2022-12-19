import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function HomeTab() { 

    const navigation = useNavigation();

    function navegaSobre() {
        navigation.navigate('Sobre');
    }

    return(
        <View style={styles.container}>
            <Text style={ styles.title }>Tela Home</Text>
            <Button 
            style={ styles.btn}
            title="detalhes"
            onPress={ () => navigation.navigate('Detalhes')}
            />

            <View stylee= { styles.viewBtn }>
                <Button 
                style={ styles.btn}
                title="abrir drawer"
                onPress={ () => navigation.openDrawer() }
                /> 
            </View>
            
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
    },
    btn: { 
        height: 50,
        borderRadius: 5,
    },
    viewBtn: { 
        marginTop: 20,
    }
});

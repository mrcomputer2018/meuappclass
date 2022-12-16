import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';

export default function Sobre() {

    const route = useRoute();
    const navigation = useNavigation();

    //manipular o titulo dentro de um componente
    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Pagina Sobre' : route.params?.nome,
        })
    }, [navigation]);
    
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Tela Sobre</Text>
            <Text style={ styles.txt }>{ route.params?.nome }</Text>
            <Text style={ styles.txt }>{ route.params?.email }</Text>

            <View style={ styles.ViewBtn }>
                <Button
                style={ styles.btn } 
                title='Contato' 
                onPress={ () => navigation.navigate('Contato') }
                />

                <Button
                style={ styles.btn }
                title='Voltar tela'
                /* voltando para pilha anterior */
                onPress={ () => navigation.goBack() }
                />
            </View>
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
    },
    txt: {
        fontSize: 18,
    },
    ViewBtn: { 
        width: 250,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        margin: 10,
    } 
});
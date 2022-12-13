import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

export default function App(){
    
    const [ name, setName ] = useState('marcelo');
    const [ txtInput, setTxtInput ] = useState('');

    function altrar(){
        setName( txtInput);
        /* voltando para uma string vazia */
        setTxtInput('');
    }

    return(
        <View style={ styles.container }>
            <TextInput
            style={ styles.textInput }
            placeholder='digite seu nome'
            value={ txtInput }
            onChangeText={(text) => setTxtInput( text )}
            />

            <TouchableOpacity
            style={ styles.btn }
            onPress={ altrar }
            >
                <Text
                style={ styles.txtBtn }
                >
                    Altera nome
                </Text>
            </TouchableOpacity>

            <Text style={ styles.text }>
                { name }
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    text: { 
        color: '#000',
        fontSize: 28,
        marginLeft: 10,
    },
    btn: { 
        height: 50,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    txtBtn: {
       color: '#fff',
       fontSize: 26,
       fontWeight: 'bold',
    },
    textInput: {
        padding: 10,
        margin: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 18,
    },
});
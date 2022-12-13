import React, 
{ useState, useEffect, useMemo } from 'react';
import 
{ View, StyleSheet, Text, TextInput, TouchableOpacity } 
from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

    const [ name, setName ] = useState('');
    const [ txtInput, setTxtInput ] = useState('');

    /*  quando montar na tela chamara esta funçao */
    /*  componentDidMount */
    useEffect(() => {
        try {
            async function getStorage() { 
                const nomeStorage = await AsyncStorage.getItem('nomes');

                if (nomeStorage !== null) { 
                    setName(nomeStorage);
                }
            }
    
            getStorage();
          
        } catch (error) {
            alert('Error: ' + error.message);
        }
        
    }, []);

    /* quando name for alterado sera executado */
   /*  componentDidupdate */
    useEffect( () =>{

        try {
            async function saveStorage() {
                /*  salvando AsyncStorage */
                 await AsyncStorage.setItem('nomes', name);
             }

             saveStorage();

        } catch (error) {
            alert('Error: ' + error.message);
        }

    }, [name] );

    function alterarNome(){
        setName(txtInput);
        setTxtInput('');
    }

    /* quando alterar a state nome sera executado */
    const letrasNome = useMemo(() => {
        console.log('muudou letra');
        return name.length;
    
    }, [name]);

    return(
        <View style={ styles.container }>
            {/* input */}
            <TextInput
            style={ styles.txtInput }
            placeholder='digite o seu nome...'
            value={ txtInput }
            onChangeText={ (text) => setTxtInput( text) }
            />

            {/* botao */}
            <TouchableOpacity 
            style={ styles.btn }
            onPress={ alterarNome }
            >
                <Text style={ styles.txtBtn }>
                    Alterar nome
                </Text>
            </TouchableOpacity>

            <Text style={ styles.txt }>
                { name }
            </Text>
            <Text style={ styles.txt }>
                tem { letrasNome } letras
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    txtInput: {
        fontSize: 24,
        padding: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
    },
    btn: {
        height: 55,
        backgroundColor: '#ff0000',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 5,
    },
    txtBtn: {
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    },
    txt: {
        fontSize: 30,
        color: '#000',
        textAlign: 'center',
        marginTop: 15,
     },
});

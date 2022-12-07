import React, { Component } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import api from './src/services/api';

class Conversor extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_value: 0,
            convertedValue: 0,
         };

         this.converter = this.converter.bind(this);
    }

    async converter() {

        let de_para = this.state.moedaA + '_' + this.state.moedaB

        try {
            const response = await api.get(`/convert?q=${de_para}&compact=ultra&apiKey=7c5ef455b88d735bc6ad`);

            let cotacao = response.data[de_para];
            let result = ( cotacao * parseFloat(this.state.moedaB_value) );

            this.setState({
                convertedValue: result.toFixed(2),
            });

           /*  fechando o teclado */
            Keyboard.dismiss();

        } catch (error) {
            alert("falha de requisição HTTP: " + error);
        }
    }

    render() { 
        /* desconstrucao */
        const { moedaA, moedaB } = this.props;

        return (
            <View style={ styles.container }>
                <Text style={ styles.title }>Conversor</Text>
                <Text style={ styles.title }>
                    { moedaA } para { moedaB }
                </Text>

                <TextInput
                style={ styles.input }
                placeholder='Valor a ser convertido'
                keyboardType='numeric'
                onChangeText={(moedaB_value) => this.setState({ moedaB_value: moedaB_value })}
                />

                <TouchableOpacity style={ styles.btn }
                onPress={ this.converter }
                >
                    <Text style={ styles.txtBtn }>Converter</Text>
                </TouchableOpacity>

                <Text style={ styles.txtReseult }>
                    { (this.state.convertedValue === 0) ? '' : this.state.convertedValue }
                </Text>
            </View>
         );
    }
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
        color: '#000',
    },
    input: {
        width: 280,
        height: 50,
        backgroundColor: '#ccc',
        textAlign: 'center',
        marginTop: 15,
        fontSize: 20,
        color: '#000',
        borderRadius: 5,
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: '#ff0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    txtBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtReseult: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 15,
    },
 });

 export default Conversor;
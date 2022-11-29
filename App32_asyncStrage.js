/* asyncStorage */
import React, { Component } from "react";
import 
{ View, StyleSheet, Text, TextInput, TouchableOpacity, Keyboard } 
from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

class App extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            input: '',
            nome: 'Marcelo',
        };

        this.gravaNome = this.gravaNome.bind(this);
    }

    // componentDidMount - quando o componente e montado em tela
    // Buscando no banco de dados
    async componentDidMount(){
        await AsyncStorage.getItem('nome').then((value)=> {
            this.setState({nome: value});
        })
    }

    // componentDidUpdate - quando um state e atualizado faz algo
    // prevProps - trata das props anteriores
    // prevState - trata dos estados anteriores antes de ser alterado
    async componentDidUpdate( _, prevState ){
        const nome = this.state.nome;

        if(prevState !== nome){
           await AsyncStorage.setItem('nome', nome);
        }
    }

    gravaNome() {
        this.setState({
            nome: this.state.input,
        });

        alert('Dados salvos com sucesso')

        /* fechando o teclado apos salvar dados */
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={ styles.container }>
                {/* input */}
                <View style={ styles.viewInput }>
                    <TextInput
                    style={ styles.input }
                    /* valor dentro do state.input */
                    value={ this.state.input }
                    onChangeText={ (text) => this.setState({ input: text }) }
                    underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity onPress={ this.gravaNome }>
                        <Text style={ styles.txtButton }>+</Text>
                    </TouchableOpacity>

                </View>

              

                <Text style={ styles.name }>
                    { this.state.nome }
                </Text>

            </View>
        );
     }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    viewInput: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        padding: 10,
    },
    txtButton: {
        color: '#fff',
        backgroundColor: '#222',
        height: 50,
        width: 50,
        padding: 10,
        fontSize: 24,
        fontWeight: 'bold',
        borderRadius: 5,
        alignItems: 'center',
        textAlign: 'center',
    },
    name: {
        marginTop: 15,
        fontSize: 24,
    }
});

export default App;
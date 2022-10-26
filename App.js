/* recebendo dados */
import React , { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

class App extends Component { 

    constructor(propps) {
        super(propps);
        this.state = {
            name: '',
        };

        this.capturaNome = this.capturaNome.bind(this);
    }

    capturaNome(text){
        if (text.length > 0) {
            this.setState({ 
                name: 'Bem vindo: ' + text,
            });
        }
        else { 
            this.setState({ name: ''});
        }
        
    }

    render() {
        return(
            <View style={ styles.container }>
                <TextInput
                    placeholder='Digite o seu nome'
                    underlineColorAndroid= 'transparent'
                    onChangeText={ this.capturaNome }
                    style={ styles.textInput }
                />

                <Button title='Inserir' onPress={ this.inserir }/>

                <Text 
                style={ styles.text }>
                    { this.state.name }
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#222',
        margin: 10,
        padding: 10,
        fontSize: 20,
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default App;
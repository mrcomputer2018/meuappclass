import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class App extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            name: '',
        };

        this.entrar = this.entrar.bind(this);
    };

    entrar(nome){
        this.setState({
            name: nome
        })
    }

    render() {
        return ( 
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    {this.state.name}
                </Text>

                <Button 
                    title='Entrar'
                    onPress={() => this.entrar('Eu estive aqui!!!') }
                    style={ styles.button }
                />
            </View>
        );
    };
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: { 
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10
    },
    button: { 
        height: 50,
        width: 200,
    },
});

export default App;
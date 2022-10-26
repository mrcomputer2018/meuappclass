import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class App extends Component {
    render(){
        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    Meu Terceiro App
                </Text>
                
                <ComponentConstructor />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        fontSize: 24,
        fontWeight: 'bold',
    },
    viewComponent: {
        marginTop: 20, 
        width: 250
    }
});

class ComponentConstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        }

        this.entrar = this.entrar.bind(this);
        this.trocar = this.trocar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        });
    }

    trocar(nome){
      this.setState({
        nome: nome
      })
    }

    render() {
        return (
            <View style={ styles.viewComponent }>

                <Button title="Entrar" onPress={() => this.entrar('Famadev - 2022') }/>

                <Button title="Trocar" onPress={() => this.trocar('Famadev - Futuro') }/>

                <Text 
                style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>
                    { this.state.nome }
                </Text>
                
            </View>
        );
    };
};
    
export default App;
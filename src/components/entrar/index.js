import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Entrar extends Component { 
    render() {
        return(
            <View style={ styles.viewModal }>
                <Text style={ styles.textModal }>
                    seja bem vindo!!!
                </Text>
                <Button title='Fechar' onPress={ this.props.sair }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewModal: {
        backgroundColor: '#292929',
        borderRadius: 10,
        width: 390,
        height: 180,
        justifyContent: 'center',
        alignItems:'center',
        margin: 10,
    },
    textModal: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        padding: 20,
    },
});

export default Entrar;
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Pessoa extends Component {
    render() {
        return (
            <View style={styles.areaPerson}>
                <Text style={ styles.textPerson }>Nome: { this.props.data.nome }</Text>
                <Text style={ styles.textPerson }>Idade: { this.props.data.idade }</Text>
                <Text style={ styles.textPerson }>E-mail: { this.props.data.email }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({ 
    areaPerson : {
        height: 250,
        backgroundColor: '#222',
        marginBottom: 15,
    },
    textPerson: {
        fontSize: 24,
        color: '#fff',
    },
});

export default Pessoa;
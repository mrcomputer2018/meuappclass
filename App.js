import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed : [
                {id: '1', nome: 'matheus', idade: 50, email: 'matheus@matheus.com'},
                {id: '2',nome: 'joao', idade: 22, email: 'joao@joao.com'},
                {id: '3',nome: 'henrique', idade: 39, email: 'henrique@henrique.com'},
                {id: '4',nome: 'paulo', idade: 15, email: 'paulo@paulo.com'},
            ]
        };
    }

    render() { 
        return (
            <View style={styles.container}>
                
                <FlatList
                KeyExtractor={( item ) => item.id}
                /* propriedades obrigatorias */
                data={this.state.feed}
                renderItem={ ({ item }) => <Pessoa data={ item }/>}
                />

            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    areaPerson : {
        height: 250,
        backgroundColor: '#222',
        marginBottom: 15,
    },
    textPerson: {
        fontSize: 24,
        color: '#fff',
    },
})

export default App;

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
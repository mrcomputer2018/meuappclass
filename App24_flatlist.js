import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Pessoa from './src/components/pessoa';

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
})

export default App;

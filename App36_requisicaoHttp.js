import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';

import api from './src/services/api';
import Filmes from './src/components/filmes';

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            filmes: [],
            loading: true,
        };
    }

    async componentDidMount() { 
        try{
            const response = await api.get("/r-api/?api=filmes");
            /* axios quando faz uma requisição 
            os dados vem dentro de data  */
            this.setState({ 
                filmes:response.data,
                loading: false, 
            });
        }
        catch(error){
            alert("falha de requisição HTTP: " + error);
        }
    }

    render() {

        if(this.state.loading) {
            return (
                <View style={ styles.viewLoading }>
                    <ActivityIndicator
                    color='#09a6ff'
                    size={100}
                    />
                    <Text style={ styles.textLoading }>
                        Carregando...
                    </Text>
                </View>
            );
        }
        else {
            return (
                <View style={ styles.container }>
    
                    <FlatList
                    data={ this.state.filmes }
                   /*  key sempre em string */
                    keyExtractor={ item => item.id.toString() }
                    /* cada item que sera renderizado */
                    renderItem={ ({ item }) => <Filmes data={ item }/> }
                    />
                  
                </View>
            );
        }
     }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewLoading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLoading: {
        color: '#09a6ff',
        padding: 5,
    },
});

export default App;
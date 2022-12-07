import React, { Component } from 'react';
import 
{ View, StyleSheet, ActivityIndicator, Text } 
from 'react-native';
import Conversor from './src/components/conversor';

class App extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
        };
    }

   componentDidMount() {
        try {
            this.setState({
                loading: false,
            })
        } catch (error) {
            alert("falha de requisição HTTP: " + error);
        }
    }

    render() {
        if(this.state.loading) {
            return(
                <View style={ styles.viewLoading }>
                    <ActivityIndicator
                    color='#09a6ff'
                    size={100}
                    />
                    <Text style={ styles.txtLoading }>Carregando...</Text>
                </View>
            );
            
        }
        else {
            return (
                <View style={ styles.container }>
                    <Conversor
                    moedaA='USD'
                    moedaB='BRL'
                    />
                </View>
             );
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewLoading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtLoading: {
        color: '#09a6ff',
    },
});

export default App;
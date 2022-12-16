import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';

class App extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            status: false
        };

    }

    render() {
        return (
            <View style={ styles.container }>
                <Switch 
              /*   valor que esta no momento */
                value={ this.state.status }
                /* coloca em algum lugar o que vc selecionou */
                onValueChange={ (valorSwitch) => this.setState({ status: valorSwitch }) }
                thumbColor='#ff0000'
                />
                <Text style={ styles.text }>{ this.state.status ? 'Ativado' : 'Desativado'}</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginTop: 15,
    }
});

export default App;
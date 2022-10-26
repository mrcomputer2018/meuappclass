import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class App extends Component {
    render(){
        return (
            <View style={ styles.container }>
                <View style={ styles.view1 }></View>
                <View style={ styles.view2 }></View>
                <View style={ styles.view1 }></View>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        /* ocupa o tamanho inteiro da tela */
        flex: 1,
        backgroundColor: 'gray',
    },
    view1: {
        height: 65,
        backgroundColor: 'black',
    },
    view2: {
        flex: 1,
        backgroundColor: 'green',
    }
});

export default App;
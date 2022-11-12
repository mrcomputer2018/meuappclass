import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Slider from '@react-native-community/slider';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            valor: 50,
        };
    };

    render() {
        return (
            <View style={ styles.container }>
                <Slider 
                    style={ styles.slider }
                    minimumValue={0}
                    maximumValue={100}
                    onValueChange={ (valorSelecionado)=> this.setState({
                            valor: valorSelecionado 
                        }) 
                    }
                    value={ this.state.valor }
                    minimumTrackTintColor="#001100"
                    maximumTrackTintColor='#110000'
                />
                <Text style={ styles.text }>Você tem: { this.state.valor.toFixed(1) } Kg</Text>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 15,
     },
     slider: {
        padding: 15,
     }
});

export default App;
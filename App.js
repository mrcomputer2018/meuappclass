import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';

class App extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
            larguraAnimada: new Animated.Value(170),
            alturaAnimada: new Animated.Value(50),
            opacityAnimada: new Animated.Value(0),
        };

        this.carregarGrafico= this.carregarGrafico.bind(this);

    }

    carregarGrafico() {
        Animated.sequence([
            Animated.timing(
                this.state.opacityAnimada,
                {
                    toValue: 1,
                    duration: 2000,
                }
            ),
            Animated.timing(
                this.state.alturaAnimada,
                {
                    toValue: 300,
                    duration: 500,
                }
            ),
        ]).start();
    }

    render() { 
        return(
            <View style={styles.container}>

                <View style={{
                    height: 80,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: '#4169e1',
                }}>
                    <TouchableOpacity onPress={ this.carregarGrafico }>
                        <Text style={{
                            fontSize: 25,
                            color: '#fff',
                        }}>
                            Gerar grafico
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                    <Text>Vendas</Text>
                    <Animated.View style={{
                        width: this.state.larguraAnimada,
                        height: this.state.alturaAnimada,
                        backgroundColor: '#ff0000',
                        justifyContent: 'center',
                        opacity: this.state.opacityAnimada
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 20,
                            textAlign: 'center',
                            padding: 10,
                        }}>
                            R$ 150,00
                        </Text>
                    </Animated.View>

                </View>

                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
});

export default App; 
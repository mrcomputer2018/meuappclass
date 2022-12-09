import React, { Component } from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class App extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
            larguraAnimada: new Animated.Value(170),
            alturaAnimada: new Animated.Value(50),
        };

        Animated.loop(

            /* Animated.timing(
                this.state.larguraAnimada,
                {
                    toValue: 300,
                    duration: 2000,
                }
            ) */
            Animated.sequence([
                Animated.timing(
                    this.state.larguraAnimada,
                    {
                        toValue: 250,
                        duration: 2000,
                    }
                ),
                Animated.timing(
                    this.state.larguraAnimada,
                    {
                        toValue: 170,
                        duration: 2000,
                    }
                ),
            ])
        ).start();
    }

    render() { 
        return(
            <View style={styles.container}>
                <Animated.View style={{
                    width: this.state.larguraAnimada,
                    height: this.state.alturaAnimada,
                    backgroundColor: '#4169e1',
                    justifyContent: 'center',
                    borderRadius: 25,
                }}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 20,
                        textAlign: 'center',
                        padding: 10,
                    }}>
                        Carregando...
                    </Text>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App; 
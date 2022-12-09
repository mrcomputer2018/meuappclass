import React, { Component } from 'react';
import 
{ View, StyleSheet, Text, Animated } 
from 'react-native';

class App extends Component {

    constructor(props) { 
        super(props);
        this.state = { 
            widthAnimation: new Animated.Value(150),
            heightAnimation: new Animated.Value(50),
            opacityAnimation: new Animated.Value(0),
        };

        Animated.sequence([

            Animated.timing(
                this.state.opacityAnimation,
                {
                    toValue: 1,
                    duration: 2000
                }
            ),

            Animated.parallel([

                Animated.timing( 
                    this.state.widthAnimation,
                    {
                        toValue: 300,
                        duration: 2000
                    }
                ),
    
                Animated.timing(
                    this.state.heightAnimation,
                    {
                        toValue: 200,
                        duration: 2000
                    }
                )
            ]), 
            
            Animated.timing(
                this.state.opacityAnimation,
                {
                    toValue: 0,
                    duration: 2000
                }
            )

        ]).start();

        /* Animated.timing(
            this.state.widthAnimation, 
           {
                toValue: 300,
                duration: 2000,
           },
        ).start(); */
    }

    render() {
        return(
            <View style={ styles.container }>
                <Animated.View style={{ 
                    width: this.state.widthAnimation,
                    height: this.state.heigthAnimation,
                    backgroundColor: '#4169e1',
                    justifyContent: 'center',
                    padding: 10,
                    opacity: this.state.opacityAnimation,
                }}>
                    <Text style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontSize: 24,
                        fontWeight: 'bold',
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
    txtLoading: {
        
    },
});

export default App;
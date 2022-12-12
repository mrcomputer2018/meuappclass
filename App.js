import React, { Component } from 'react';
import 
{ View, StyleSheet, Text, Animated } 
from 'react-native';

class App extends Component {

    constructor(props) { 
        super(props);
        this.state = { 
            widthAnimated: new Animated.Value(0),
        };

        Animated.timing(
            this.state.widthAnimated,
            {
                toValue: 100,
                duration: 5000
            }
        ).start();
    }

    render() {

        let porcentAnimated = this.state.widthAnimated.interpolate({
            inputRange: [0, 100],
            outputRange: ['0%', '100%']
        });

        return (
            <View style={ styles.container }>
                <Animated.View style={{
                    backgroundColor: '#4961e1',
                    width: porcentAnimated,
                    height: 25,
                }}>

                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    }
});

export default App;
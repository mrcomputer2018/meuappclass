import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={ styles.container }>
                    <ScrollView 
                    horizontal={true}
                    showsHorizontalScrollIndicator={ false }>
                        <View style={ styles.box5 }></View>
                        <View style={ styles.box6 }></View>
                        <View style={ styles.box7 }></View>
                        <View style={ styles.box8 }></View>
                    </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    box5: {
        backgroundColor: 'blue',
        height: 250,
        width: 150,
    },
    box6: {
        backgroundColor: 'yellow',
        height: 250,
        width: 150,
    },
    box7: {
        backgroundColor: 'red',
        height: 250,
        width: 150,
    },
    box8: {
        backgroundColor: 'green',
        height: 250,
        width: 150,
    },
});

export default App;
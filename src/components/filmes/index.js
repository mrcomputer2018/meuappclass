import React , { Component } from 'react';
import 
{ View, StyleSheet, Text, Image, TouchableOpacity } 
from 'react-native';

class Filmes extends Component { 
    
    render() {
        /* desconstrucao */
        const { nome, foto } = this.props.data;
        
        return ( 
            <View>
               {/* Efeito de card */}
                <View style={ styles.card }>
                    <Text style={ styles.title }>{ nome }</Text>
                    <Image
                    style={ styles.photo }
                    source={{ uri: foto }}
                    />

                    <View style={ styles.areaBtn }>
                        <TouchableOpacity style={ styles.btn }>
                            <Text style={ styles.txtBtn }>
                                LEIA MAIS...
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        padding: 15,
    },
    photo: {
        height: 250,
        zIndex: 1,
    },
    areaBtn: {
        alignItems: 'flex-end',
        marginTop: -40,
        /* garantindo que fique por cima da foto */
        zIndex: 9,
    },
    btn: {
        width: 120,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding: 8,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    txtBtn: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Filmes;
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

export default function App() { 
    return(
        <View style={ styles.container }>
            <Text style={ styles.txt }>
                Programar Sempre
            </Text>
            
            <FontAwesome
            name="home"
            size={50}
            color="#11118c"
            />

            <FontAwesome
            name="user"
            size={50}
            color="#54a300"
            />

            <Feather 
             name="gift"
             size={50}
             color="#7665ff"
            />

            <TouchableOpacity style={ styles.btn }>
                <FontAwesome
                name="youtube"
                size={35}
                color="#fff"
                />
                <Text style={ styles.txtBtn }>Acessar canal</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 24,
        color: '#000',
    },
    btn: { 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        padding: 10,
        backgroundColor: '#ff0000',
        borderRadius: 5,
    },
    txtBtn: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
});
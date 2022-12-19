import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import 
{ DrawerContentScrollView, DrawerItemList } 
from "@react-navigation/drawer";

export default function CustomDrawer(props) {
    return(
        /* scroll do drawer */
        <DrawerContentScrollView { ...props }>

            <View style={ styles.container }>
                <Image 
                style={ styles.image }
                source={require('../assets/perfil.png')}
                />
                <Text style={ styles.txt }> Bem-vindo</Text>
            </View>

            < DrawerItemList { ...props } />
        
        </DrawerContentScrollView>
    );
 }

 const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 85,
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 30,
        marginBottom: 30,
    },
    image: { 
        width: 65,
        height: 65,
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    }
 });
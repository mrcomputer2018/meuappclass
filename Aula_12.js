import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

class App extends Component {
    render(){
        let image = 'https://sujeitoprogramador.com/steve.png';

        return (
            <View style={ styles.container }>
                <Text style={ styles.text }>
                    Meu Terceiro App
                </Text>

                <Image 
                    style={ styles.image } 
                    source={{ uri: image }}/>
                
                <ComponentConstructor />
            </View>
        );
    };
};

class ComponentConstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: '',
        }

        this.entrar = this.entrar.bind(this);
        this.trocar = this.trocar.bind(this);
    }

    entrar(nome) {
        this.setState({
            nome: nome
        });
    }

    trocar(nome){
      this.setState({
        nome: nome
      })
    }

    render() {
        return (
            <View >

                <View style={ styles.viewComponent }>
                    <Button 
                        style={ styles.button } 
                        title="Entrar" 
                        onPress={() => this.entrar('Famadev - 2022') }/>

                    <Button
                        style={ styles.button } 
                        title="Trocar" 
                        onPress={() => this.trocar('Famadev - Futuro') }/>
                </View>
               
                <Text 
                style={ styles.textComponent }>
                    { this.state.nome }
                </Text>

            </View>
        );
    };
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text : {
        fontSize: 32,
        fontWeight: 'bold',
    },
    image: {
        width: 500,
        height: 200,
        marginTop: 15
    },
    viewComponent: {
        marginTop: 20, 
        width: 200,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        margin: 50,
    },
    textComponent : {
        color: 'black', 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginTop: 30, 
        textAlign: 'center' ,
    },
});
    
export default App;
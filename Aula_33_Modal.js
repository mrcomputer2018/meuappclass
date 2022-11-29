import React, { Component } from 'react';
import 
{ View, StyleSheet, Text, Button, Modal } 
from 'react-native';

class App extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            modalVisible: false,
        };

        this.entrar = this.entrar.bind(this);
        this.fechar = this.fechar.bind(this);
    }

    entrar() {
        this.setState({
            modalVisible: true,
        });
    }

    fechar() {
        this.setState({
            modalVisible: false,
        });
    }

    render(){
        return(
            <View style={ styles.container }>
                <Button title='Entrar' onPress={ this.entrar }/>

                <Modal
                transparent={ true }
                animationType='fade' 
                visible={ this.state.modalVisible }
                >
                    <View style={ styles.viewModal }>
                        <Text style={ styles.textModal }>
                            seja bem vindo!!!
                        </Text>
                        <Button title='Fechar' onPress={ this.fechar }/>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd'
    },
    viewModal: {
        backgroundColor: '#292929',
        flex: 1,
    },
    textModal: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        padding: 20,
    },
});

export default App;
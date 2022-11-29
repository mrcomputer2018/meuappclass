import React, { Component } from 'react';
import 
{ View, StyleSheet, Text, Button, Modal } 
from 'react-native';

import Entrar from './src/components/entrar';

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
                animationType='slide' 
                visible={ this.state.modalVisible }
                >   

                    <View style={ styles.modal }>
                        <Entrar sair={ this.fechar }/>
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
    modal: {
        margin: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default App;
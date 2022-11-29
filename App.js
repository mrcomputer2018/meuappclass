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
    }

    entrar() {

    }

    render(){
        return(
            <View style={ styles.container }>
                <Button title='Entrar'onPress={ this.entrar }/>

                <Modal>
                    <View>
                        <Text>
                            seja bem vindo!
                        </Text>
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
    }
});

export default App;
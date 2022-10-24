import React, { Component } from "react";
import { View, Text, Image, Button } from "react-native";

class App extends Component {

  render() {

    let nome = 'Steve Jobs';
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 16 }}>
              Olá Mundo!!!
          </Text>

          <Text 
            style={{ color: 'gray', fontSize: 24, fontWeight: 'bold'}}
          >
              Meu Segundo App
          </Text>

          <ImageComponent 
            largura={ 500 } altura={ 200 } nome={ nome }
          />

          <ComponentConstructor />

      </View>
    );
  };
};

class ImageComponent extends Component {
    render () {

        let image = 'https://sujeitoprogramador.com/steve.png';

        return (
            <View style={{ alignItems: 'center' }}>
                <Image 
                source={{ uri: image }}
                style={{ width: this.props.largura, height: this.props.altura, marginTop: 10 }}
                />
                <Text style={{ marginTop: 10, fontSize: 16 }}> 
                    { this.props.nome }
                </Text>
            </View>
        );
    };
};

class ComponentConstructor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: 'by FamaDev',
        }

        this.entrar = this.entrar.bind(this);
    }

    entrar() {
        this.setState({
            nome: 'by FamaDev - 2022'
        });
    }

    render() {
        return (
            <View style={{ marginTop: 20, width: 250 }}>

                <Button title="Entrar" onPress={ this.entrar }/>

                <Text 
                style={{ color: 'black', fontSize: 16, fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>
                    { this.state.nome }
                </Text>
            </View>
        );
    };
};
    

export default App;
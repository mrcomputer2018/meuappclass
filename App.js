import React, { Component } from "react";
import { View, Text, Image } from "react-native";

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

export default App;
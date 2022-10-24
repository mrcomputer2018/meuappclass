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
        style={{ color: 'gray', fontSize: 24, fontWeight: 'bold'}}>
          Meu Segundo App
        </Text>
        <Image 
          source={{ uri: 'https://sujeitoprogramador.com/steve.png'}}
          style={{ width: 500, height: 200, marginTop: 10 }}
        />
        <Text style={{ marginTop: 10, fontSize: 16 }}> 
         { nome }
        </Text>
      </View>
    );
  };
};

export default App;
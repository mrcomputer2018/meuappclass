import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            pizza: 0,
            pizzas: [
                { key: 1, nome: 'Calabresa', valor: 59.40 },
                { key: 2, nome: 'Portuguesa', valor: 52.40 },
                { key: 3, nome: 'Peperoni', valor: 40.50 },
                { key: 4, nome: 'Strogonoff', valor: 35.50 },
            ]
        };
    };

    render() { 
       /*  map para percorrer todo array de objetos */
       /* v - value k - key */
        let pizzasItem = this.state.pizzas.map( (v,k) => {
            return (<Picker.Item 
                        key={k} 
                        value={k} 
                        label={v.nome}
                    />)
        });

        return (
            <View  style={ styles.container }>
                <Text style={ styles.logo }>Menu Pizza</Text>

                <Picker
                selectedValue={ this.state.pizza }
                onValueChange={ (itemValue, itemIndex) => this.setState({ pizza: itemValue }) }
                >
                   {/*  <Picker.Item key={1} value={1} label="Calabresa"/>
                    <Picker.Item key={2} value={2} label="Portuguesa"/>
                    <Picker.Item key={3} value={3} label="Peperoni"/>
                    <Picker.Item key={4} value={4} label="Romeu e Julieta"/> */}
                    {pizzasItem}
                </Picker>

                <Text style={ styles.textPizzas }>Você escolheu: { this.state.pizzas[this.state.pizza].nome }</Text>
                <Text style={ styles.textPizzas }>R$  { this.state.pizzas[this.state.pizza].valor.toFixed(2) }</Text>
                <Text style={ styles.textPizzas }>{ this.state.pizza }</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    logo: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    textPizzas: {
        fontSize: 24,
        marginTop: 15,
        textAlign: 'center',
    },
});

export default App;
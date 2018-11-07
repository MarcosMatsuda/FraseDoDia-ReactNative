import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const Estilos = StyleSheet.create({
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
})

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.floor(Math.random() * 10);

  var frase = Array(
"\“A vida é sobre criar impacto, não uma renda\” – Kevin Kruse.",
"\“Seja o que a sua mente pode conceber e acreditar, ela pode conseguir\” – Napoleon Hill.",
"\“Esforce-se para não ser um sucesso, mas sim para ser valioso\” – Albert Einstein.",
"\“Duas estradas divergiam em uma bifurcação, e eu peguei a menos percorrida. E isso fez toda a diferença\” – Robert Frost.",
"\“Eu atribuo o meu sucesso a isso: eu nunca dei ou tomei qualquer desculpa\” – Florence Nightingale.",
"\“Você perde 100% dos tiros que não dá\”- Wayne Gretzky.",
"\“Eu perdi mais de 9 mil tiros livres em minha carreira. Eu perdi quase 300 jogos. Em 26 vezes e tive a bola do jogo e perdi. Eu falhei uma e outra vez em minha vida. E é por isso que eu consegui\” – Michael Jordan.",
"\“A coisa mais difícil é a decisão de agir, o resto é apenas tenacidade\” – Amelia Earhart.",
"\“Todo strike me aproxima do próximo home run\” – Babe Ruth.",
"\“Definir um objetivo é o ponto de partida de toda a realização\” – W. Clement Stone.");

  Alert.alert(
  'Frase escolhida:',
  frase[numeroAleatorio],
  [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
}

export default class HelloWorldApp extends Component {
  render() {

    const { principal, botao, textoBotao } = Estilos;

    return (
      <View style={principal}>
        <Image source={require('./img/logo.png')} />
        <TouchableOpacity 
          style={botao} 
          onPress={gerarNovaFrase}
          >          
          <Text style={textoBotao}>Nova frase</Text>
        </TouchableOpacity>        
      </View>
    );
  }
}
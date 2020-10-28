/**
 * IMPORTS
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import styles from '../../Styles/StylesContent';
import {Header} from '../../routes';

/**
 * CLASSE TELA Menu Principal
 */
export default class Algoritmos extends Component {
    
    //faz com que a tela não apareça na gaveta do menu hamburguer
    static navigationOptions = ({ navigation }) => {
      return{
        drawerLabel: () => null
      }
    }
  
    render() {
        return (
            <ScrollView style={styles.tela}>
                <Header navigation={this.props.navigation}/>
                <View style={styles.divTitle}>
                    <Text style={styles.title}>LÓGICA DE PROGRAMAÇÃO</Text>
                </View>

                <View style={styles.divContent}>
                    <Text style={styles.subtitle}>Prática</Text>
                    <Image source={require('../../Images/algoritmo2.png')} style={styles.img}  resizeMode="contain"></Image>
                    <Text style={styles.texto}>Como dito anteriormente, os algoritmos aplicados na programação 
                    seguem a mesma lógica, contudo são construídos de formas diferentes. Para deixar a 
                    estrutura dos algoritmos mais padronizada, foram criadas os pseudocódigos, sendo o 
                    mais famoso no Brasil o Portugol. A seguir se encontra um exemplo da maneira básica 
                    de se construir um algoritmo e da maneira do Portugol para um sistema simples de soma 
                    de dois números:</Text>
                    <Text style={styles.lista}>{`
                    Algoritmo despadronizado:
                    
                    1) Inserir o primeiro número;
                    2) Inserir o segundo número;
                    3) Somar os dois;
                    4) Mostrar o resultado;`}</Text>
                    <Text style={styles.lista}>{`
                    Algoritmo com Portugol:

                    Início;
                    Inteiro a, b, resultado;
                    1) Ler (a);
                    2) Ler (b);
                    3) Resultado <- a + b;
                    4) Escrever (resultado).`}</Text>
                    <Text style={styles.texto}>O segundo exemplo, com maior padronização e regramento, 
                    claramente será mais complexo em um sistema real, porém deixa as etapas muito mais 
                    organizadas. Os inteiros - presentes no início do exemplo - representam o números 
                    inteiros que fazem parte do processo de soma, sendo esses: o primeiro número (A), 
                    o segundo número (B) e o resultado (RESULTADO). O caractere “{'<-'}“ significa uma 
                    atribuição de valores. Já adiantando o que será falado mais para frente, os “inteiros”
                     representam as variáveis, mas não se preocupe em entender isso neste momento.</Text>
                    <Text style={styles.texto2}>Obviamente há muito mais a se aprender sobre algoritmos, 
                    mas isso fica para os profissionais da área. O próximo passo será realizar duas 
                    atividades que envolvem algoritmos.</Text>
                </View>
            </ScrollView>
        )
    }
  }
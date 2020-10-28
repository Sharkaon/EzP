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
export default class Lacos extends Component {
    
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
                    <Text style={styles.title}>BÁSICO DA PROGRAMAÇÃO</Text>
                </View>

                <View style={styles.divContent}>
                    <Text style={styles.subtitle}>Laços de repetição</Text>
                    <Text style={styles.texto}>Os laços de repetição são estruturas que, como o nome já 
                    sugere, são estruturas que ocorrem repetições. Esse fundamento está muito ligado às 
                    condições. De forma bem rasa, laços de repetição são estruturas que executam certo 
                    código enquanto uma condição for verdadeira.</Text>
                    <Text style={styles.texto3}>Por exemplo, enquanto a condição A for igual a 2, certo 
                    código vai ser executado, até que A mude de valor e não seja mais 2. Um laço de 
                    repetição pode executar para sempre! Por isso, o uso do mesmo deve ser responsável, 
                    pois o programa pode ficar rodando algo infinitamente e acabar com a funcionamento 
                    de todo o resto da aplicação - algo gravíssimo.</Text>
                    <Text style={styles.texto}>A importância dos laços de repetição estão quando é 
                    necessário, por exemplo, encontrar um valor nos chamados arrays - pilhas de 
                    variáveis -, algo muito utilizado na programação.</Text>
                    <Image source={require('../../Images/for.png')} style={{width:'80%', marginTop:8, marginBottom:20, height:230}}  resizeMode="contain"></Image>
                </View>
            </ScrollView>
        )
    }
  }
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
export default class Prat extends Component {
    
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
                    <Text style={styles.title}>PROGRAMAÇÃO</Text>
                </View>

                <View style={styles.divContent}>
                    <Text style={styles.subtitle}>Como é na prática</Text>
                    <Text style={styles.texto}>Seguindo o que já foi dito, a programação é o ato de 
                    escrever, manutenir e testar o código fonte, o qual foi escrito por um programador 
                    e “traduzido” para a linguagem de máquina pelos compiladores.</Text>
                    <Text style={styles.texto}>Neste momento, continuamos na teoria porém já falando de 
                    como se dá a parte prática da programação.</Text>
                    <Text style={styles.texto}>Primeiramente, existem linguagens de programação. Podem 
                    ser associadas com os idiomas - português, inglês, alemão. Cada um se aplica a 
                    regiões do mundo (o brasileiro fala português). Da mesma forma, as linguagens se 
                    aplicam a determinadas áreas do desenvolvimento de software. Utilizar de uma 
                    linguagem se aplica em alguns aspectos: o que se deseja desenvolver, quais as 
                    características da aplicação, quais funcionalidades que serão desenvolvidas, 
                    etc.</Text>
                    <Text style={styles.texto}>Exemplificando, deseja-se desenvolver uma página web a 
                    qual calcula o imposto de renda do usuário. Provavelmente será uma boa utilizar PHP 
                    como linguagem. Ou deseja-se desenvolver um sistema de monitoramento de funcionamento 
                    em máquina de uma fábrica, certamente uma linguagem de baixo nível (linguagem mais 
                    aproximada à linguagem de máquina) como a linguagem C ou Cobol.</Text>
                    <Image source={require('../../Images/linguagens.png')} style={styles.img} resizeMode="contain"></Image>
                    <Text style={styles.texto3}>Segundamente, a programação por trás das aplicações traz 
                    outro elemento: a arquitetura de software. Ela pode ser definida de forma rasa como 
                    a modelagem que determinado programa utiliza, a qual define como se dará a construção 
                    do projeto.</Text>
                    <Text style={styles.texto2}>Terceiramente, chegando (finalmente) na parte do código, 
                    são levantadas algumas características que são aplicadas a todas linguagens de 
                    programação. A utilização de variáveis é um pilar para um código. Elas são objetos ou 
                    entidades que recebem valores os quais são retidos durante o tempo de execução que são 
                    alterados de acordo com o código.</Text>
                </View>
            </ScrollView>
        )
    }
  }
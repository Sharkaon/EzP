/**
 * IMPORTS
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import styles from '../../Styles/StylesContent';
import {Header} from '../../routes';

/**
 * CLASSE TELA Menu Principal
 */
export default class Ingroducao extends Component {
    
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
                    <Text style={styles.subtitle}>O que é?</Text>
                    <Text style={styles.texto}>Os aplicativos que rotineiramente usamos no nosso dia-dia 
                    utilizam uma lógica por trás. Na verdade, tudo que envolve a programação possui uma 
                    lógica pois é uma das bases da área. A programação é uma área que envolve muita lógica 
                    devido o fato de envolver cálculos e números - os códigos geralmente executam com base 
                    em números os quais são alterados conforme a forma como o programa deve executar.</Text>
                    <Text style={styles.texto3}>Por isso, profissionais da área precisam ter a lógica 
                    como algo bem definido, pois é algo que necessita dominar, já que é um conhecimento 
                    exigido muito pela área.</Text>
                    <Text style={styles.texto3}>Dado esse contexto, pode-se definir lógica de programação 
                    como a maneira que os desenvolvedores escrevem um sistema de computadores - o que é 
                    algo fortemente relacionado com os algoritmos, assunto que será abordado mais afundo 
                    em seguida.</Text>
                    <Text style={styles.texto}>Para construir a lógica por trás do projeto que for 
                    desenvolvido é necessário levantar algumas informações com base nos objetivos do 
                    projeto: as regras que devem ser seguidas, as preferências do projeto, etc. A partir 
                    da lógica construída sobre o projeto, devemos construir os passos que precisam ser 
                    seguidos para a construção do projeto, assunto que será tratado a seguir.</Text>
                </View>
            </ScrollView>
        )
    }
  }
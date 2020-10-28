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
                    <Text style={styles.subtitle}>Algorítmos</Text>
                    <Text style={styles.texto}>Os algoritmos estão presentes não só na programação, é 
                    algo presente no nosso dia-dia em ações comuns, como fazer um bolo. Falando em 
                    definição, o algoritmo é a “receita” para a realização de alguma atividade. Como 
                    em uma receita de bolo, os programas possuem passos a serem seguidos, sendo esses 
                    passos o chamado algoritmo. Sendo assim, algoritmos são o conjunto de etapas finitas 
                    da execução de um programa.</Text>
                    <Text style={styles.texto}>Os algoritmos são construídos com o intuito de fragmentar 
                    o projeto inteiro em tarefas menores, tornando o processo de construção de uma aplicação 
                    mais fácil e organizado. Além disso, criar um bom algoritmo define bem quem deve realizar 
                    cada etapa. Um bom projeto necessita de um bom algoritmo. Por isso, de maneira alguma 
                    esse tema deve ser negligenciado pelos programadores, apesar de muitas vezes parecer 
                    irrelevante, ter um bom entendimento do assunto vai fazer toda diferença na hora de 
                    pôr a mão no código.</Text>
                    <Text style={styles.texto5}>Exemplificando primeiramente com tarefas do cotidiano, 
                    devemos realizar uma série de ações para se arrumar para o trabalho de manhã cedo, 
                    por exemplo:</Text>
                    <Text style={styles.texto3}>{`
                    1) Levantar;
                    2) Trocar de roupa;
                    3) Lavar o rosto;
                    4) Preparar um café;
                    5) Tomá-lo;
                    6) Escovar os dentes;
                    7) Botar o sapato;
                    8) Dirigir até o trabalho.`}</Text>
                    <Text style={styles.texto8}>Para o maior esclarecimento do conteúdo, a seguir está um 
                    exemplo gráfico de um algoritmo de um problema - um candeeiro que não acende.</Text>
                    <Image source={require('../../Images/algoritmo1.jpeg')} style={{width:'80%'}}  resizeMode="contain"></Image>
                    <Text style={styles.texto7}>As etapas com as cores lima podem ser consideradas o fim das etapas.</Text>
                    <Text style={styles.texto6}>Certamente, os algoritmos de programação são mais 
                    complexos que se arrumar para o trabalho ou trocar uma lâmpada, porém segue a mesma 
                    lógica. Entretanto, o exemplo mostrado acima não possui nenhuma regra mais formal 
                    de formatação, por isso essa situação não se aproxima tanto de um verdadeiro 
                    algoritmo. Por isso, a próxima etapa do conteúdo será mostrar algoritmos mais perto do que eles realmente são.</Text>
                </View>
            </ScrollView>
        )
    }
  }
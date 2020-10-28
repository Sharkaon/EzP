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
export default class Variaveis extends Component {
    
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
                    <Text style={styles.subtitle}>Variáveis</Text>
                    <Text style={styles.texto}>A partir daqui iremos levantar as principais entidades que 
                    fazem parte da programação: o que um código de verdade possui.</Text>
                    <Text style={styles.texto}>Às pessoas que pretendem programar, é essencial ter o 
                    entendimento de termos básicos que fazem parte de qualquer sistema programado. Um 
                    desses termos são as variáveis. A definição mais formal de variável é um espaço de 
                    memória destinado a guardar informações que serão alteradas durante o processamento 
                    de sua aplicação. Para ser mais claro, variáveis poderiam ser definidas simplesmente 
                    como caixas - uma caixa guarda um número inteiro, outra guarda uma frase, outra uma 
                    letra. Essas caixas podem ter seu conteúdo alterado e é baseado nisso que todo 
                    sistema programado funciona: sem as variáveis não existe programa algum.</Text>
                    <Text style={styles.texto}>Exemplificando o uso de variáveis, pense em quando você 
                    irá realizar login em sua conta em alguma rede social. Você insere seu e-mail e senha 
                    e espera que as mesmas estejam corretas para que entre na sua conta. Lá dentro do 
                    sistema por trás desse login, possivelmente uma variável armazena seu e-mail e outra 
                    armazena sua senha. Como elas, são geradas outras variáveis como a data e hora que 
                    você acessou sua conta.</Text>
                    <Text style={styles.texto3}>Mas a importância das variáveis vão muito além de 
                    simplesmente gravar informações por um instante. Variáveis são importantes para o 
                    funcionamento de suas aplicações pois com elas é possível realizar diversas 
                    operações, como condições, laços de repetições, etc. No caso da situação do 
                    login, as variáveis que armazenavam os dados repassados passavam por condições: 
                    as variáveis “senha_repassada” e “email_repassado” são as mesma do que a senha e 
                    o e-mail da conta? Se sim, o acesso é permitido, caso não, você é impedido de 
                    entrar na sua conta.</Text>
                    <Text style={styles.texto6}>Justamente por conta desse fato, os computadores 
                    atualmente possuem muito espaço em memória (onde as variáveis são armazenadas).</Text>
                </View>
            </ScrollView>
        )
    }
  }
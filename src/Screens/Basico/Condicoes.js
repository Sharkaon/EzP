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
export default class Condicoes extends Component {
    
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
                    <Text style={styles.subtitle}>Condições</Text>
                    <Text style={styles.texto}>Todas linguagens de programação trabalham com estruturas 
                    de condição. Elas são parte fundamental que precisa ser dominada. As condições 
                    estão presentes em massa em praticamente todo código que você ver - o que às vezes 
                    não é bom, porém sem condições não existe aplicação.</Text>
                    <Text style={styles.texto}>Como o nome já diz, as estruturas de condições são termos 
                    utilizados para criar condições. Como a programação é uma ciência exata, existem 
                    dois tipos de respostas: verdadeiro e falso. Além das respostas, as condições 
                    trabalham com operadores lógicos, sendo eles: “{'&&'}” e “||”, cada um representando 
                    “e” e “ou”, respectivamente. Por último, outro termo que aparece nas condições são 
                    os operadores condicionais, podendo citar o maior que, igual a, menor que, etc.</Text>
                    <Text style={styles.texto}>Considere o seguinte cenário:</Text>
                    <Image source={require('../../Images/if.jpg')} style={styles.img}  resizeMode="contain"></Image>
                    <Text style={styles.texto}>Aqui possuímos duas variáveis - A e B - que recebem 
                    valores inteiros. logo após há uma condição, a qual possui operadores lógicos e 
                    condicionais. O IF, traduzido do inglês significa “se”. Então esse “se” indica 
                    que se a condição gerar uma resposta verdadeira, executa algo, senão (o ELSE na 
                    imagem) executa outra coisa.</Text>
                    <Text style={styles.texto}>Partindo para a parte da condição, temos: (a {'>'} 0 
                    || b == 0). Isso quer dizer que, caso A for maior que 0 ou B for igual a 2, o 
                    comando dentro da condição é executado. Sendo assim, caso uma dessas duas afirmações 
                    for verdadeira, a condição em si é verdadeira. E é isso que acontece aqui mesmo - A 
                    não é maior que 0, porém B é igual a 2.</Text>
                    <Text style={styles.texto2}>As condições são extremamente úteis para o programador. 
                    Existem mais alguns tipos, mas não são necessários para o momento. O importante 
                    aqui não é entender tudo, e sim entender o que a condição faz - caso algo for 
                    verdadeiro, algo executa, caso for falso, outra coisa executa.</Text>
                </View>
            </ScrollView>
        )
    }
  }
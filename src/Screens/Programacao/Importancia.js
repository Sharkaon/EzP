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
export default class Importancia extends Component {
    
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
                    <Text style={styles.subtitle}>Importância</Text>
                    <Text style={styles.texto}>É fato que, em geral, a maioria das pessoas utilizam seus 
                    smartphones diariamente, fazem pesquisas e realizam trabalhos em seus computadores. 
                    Sem a programação, nada disso seria possível. Hoje em dia, é impossível pensar um 
                    mundo onde a programação não exista - seria um verdadeiro caos.</Text>
                    <Text style={styles.texto}>Pode muitas vezes não parecer, mas essa é uma área que 
                    atinge todos os âmbitos da sociedade - algumas extremamente importantes como a 
                    medicina. Todas as notícias que recebemos na palma da mão em instantes após algo 
                    ocorrer tem ligação com a programação. Todas transações financeiras que são realizadas 
                    mundo afora tem ligação com a programação. Até as roupas que nós usamos possuem relação 
                    com a programação. Todas essas tarefas tiveram, em algum momento, a utilização de algum 
                    software. Pense bem, grande parte do desenvolvimento de um novo tênis para corrida passa 
                    por um computador: desde a ideia até a produção. Sendo assim, pode-se concluir que a 
                    programação tem relação até com a globalização.</Text>
                    <Text style={styles.texto}>Então, como já dito aqui, a programação possui papel de 
                    destaque e isso só tem de se intensificar, com o advento cada vez maior da Indústria 
                    4.0 - revolução que deixa cada vez mais importante a engenharia de software, tecnologia 
                    da informação e inteligências artificiais na produção da indústria. Assim sendo, em 
                    poucos anos, a habilidade de programar ou o simples conhecimento no assunto será 
                    essencial no mercado de trabalho.</Text>
                    <Image source={require('../../Images/inteligencia-artificial.jpg')} style={styles.img} resizeMode="contain"></Image>
                    <Text style={styles.texto}>Existem previsões de que inteligências artificiais irão 
                    não só substituir a mão de obra humana, como também realizar o mesmo trabalho inúmeras 
                    vezes melhor, de maneira ininterrupta e perfeita. Por isso, podemos enxergar a 
                    programação como uma habilidade imprescindível para o futuro, a qual já tem um papel 
                    primordial para todos campos da sociedade. Traduzindo, programação pode ser quase um 
                    sinônimo de sobrevivência no mercado de trabalho.</Text>
                </View>
            </ScrollView>
        )
    }
  }
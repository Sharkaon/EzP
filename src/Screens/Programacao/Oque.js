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
export default class Oque extends Component {
    
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
                    <Text style={styles.subtitle}>O que é?</Text>
                    <Text style={styles.texto}>A programação é algo que cada vez mais está presente nas 
                    nossas vidas, isso por conta do avanço tecnológico intenso que vem acontecendo nas 
                    últimas décadas.</Text>
                    <Text style={styles.texto}>A definição de programação - voltada à tecnologia - é o 
                    processo da criação de aplicações, envolvendo a escrita de códigos, o teste e a 
                    manutenção do mesmo. Porém, mais do que isso, ela é o meio pelo qual nós, humanos, 
                    utilizamos para nos comunicarmos com as máquinas.</Text>
                    <Text style={styles.texto3}>Ela teve um início sem data, mas deu seus primeiros passos 
                    nas décadas de 1940 e 1950, momento em que foram construídos os primeiros dispositivos 
                    elétricos da história. Antes dos primórdios da programação, com uma tecnologia muito 
                    ínfera e arcaica se comparada com os dias atuais, eram usadas formas inusitadas de 
                    criar códigos (em geral, essas eram mecânicas): um exemplo era a utilização de cartões 
                    de papelão, os quais eram furados de modo a criar códigos.</Text>
                    <Text style={styles.texto}>Somente em 1970, a programação evoluiu de uma maneira que 
                    se tornou minimamente parecida com o que é utilizado pelos programadores atuais, 
                    tendo a criação de muitas linguagens de programação que são empregadas em sistemas 
                    até os dias atuais.</Text>
                    <Text style={styles.texto}>Nos anos 90, começou um processo que mais tarde representaria 
                    uma verdadeira revolução não só na programação, mas na maneira de como nos comunicamos: 
                    foi o início da internet. Com ela, surgiram novas linguagens e maneiras novas de se 
                    programar.</Text>
                    <Text style={styles.texto4}>Dessa forma, levando em conta o grande impacto que tecnologias 
                    de programação trazem ao nosso dia-dia, o próximo tópico abordará sua importância.</Text>
                </View>
            </ScrollView>
        )
    }
  }
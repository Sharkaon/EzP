/**
 * IMPORTS
 */
import React, {Component, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import styles from '../../Styles/StylesAtividades';
import {Header} from '../../routes';
import { RadioButton } from 'react-native-paper';

function Questao1() {
    const [checked, setChecked] = useState();
    const [msg, setMsg] = useState();

    return (
        <View style={styles.tela}>
            <View style={styles.opcoes}>
                <View style={styles.pergunta}>
                <Text style={styles.aux2}>1) O uso das variáveis se consiste em:</Text>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')} />
                    <View style={styles.aux}>
                        <Text style={styles.texto}>
                            As variáveis são responsáveis por realizar condições que afetam o que é executado.
                        </Text>
                    </View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')} />
                    <View style={styles.aux}>
                        <Text style={styles.texto}>
                            As variáveis são utilizadas com o intuito de armazenar informações úteis ao programa.
                        </Text>
                    </View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')} />
                    <View style={styles.aux}>
                        <Text style={styles.texto}>
                            É empregada com a função de repetir a execução conforme uma condição for 
                            atendida.
                        </Text>
                    </View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fourth')} />
                    <View style={styles.aux}>
                        <Text style={styles.texto}>
                            Sua função é armazenar somente números que farão parte do funcionamento do código.
                        </Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao} onPress={() => {
                    if(checked === 'first'){
                        setMsg('RESPOSTA ERRADA: Essa função é desempenhada pelas estruras de condição. As variáveis são utilizadas com o intuito de armazenar informações úteis ao programa. Portanto, a segunda alternativa estava correta.');
                    }
                    if(checked === 'second'){
                        setMsg('RESPOSTA CERTA!');
                    }
                    if(checked === 'third'){
                        setMsg('RESPOSTA ERRADA: Essa função é desempenhada pelos laços de repetição. As variáveis são utilizadas com o intuito de armazenar informações úteis ao programa. Portanto, a segunda alternativa estava correta.');
                    }
                    if(checked === 'fourth'){
                        setMsg('RESPOSTA ERRADA: As variáveis realmente realizam a tarefa de armazenar valores, porém esses valores podem ser números ou não.');
                    }
                }}>
                <Text style={{color:'#fff', fontSize:30}}>Enviar resposta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resposta}><Text style={styles.respostatxt}>{msg}</Text></View> 
        </View>
    );
}

function Questao2() {
    const [checked, setChecked] = useState();
    const [msg, setMsg] = useState();

    return (
        <View style={styles.tela}>
            <View style={styles.opcoes}>
                <View style={styles.pergunta}>
                    <Text style={styles.aux2}>2) Qual a importância das estruturas de condição?</Text>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')} />
                    <View style={styles.aux}><Text style={styles.texto}>Não é importante.</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')} />
                    <View style={styles.aux}><Text style={styles.texto}>Tem importância pois facilita o desenvolvimento do código, porém não é excencial.</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')} />
                    <View style={styles.aux}><Text style={styles.texto}>Extremamente importante pois é capaz de definir o rumo da execução</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fourth')} />
                    <View style={styles.aux}><Text style={styles.texto}>Importante pois é responsável pela repetição de códigos e comandos.</Text></View>
                </View>
            </View>
            
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao2} onPress={() => {
                    if(checked === 'first'){
                        setMsg('RESPOSTA ERRADA: As estruturas de condição são extremamente importantes pois é com ela que se define o que será executado. Portanto, a terceira alternativa é correta.');
                    }
                    if(checked === 'second'){
                        setMsg('RESPOSTA ERRADA: O seu uso não só facilita o desenvolvimento do código, como também é axcencial. Portanto, a terceira alternativa é correta.');
                    }
                    if(checked === 'third'){
                        setMsg('RESPOSTA CERTA!');
                    }
                    if(checked === 'fourth'){
                        setMsg('RESPOSTA ERRADA: As estruturas de condição não são responsáveis por tal função. Alternativa correta é a terceira.');
                    }
                }}>
                <Text style={{color:'#fff', fontSize:30}}>Enviar resposta</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.resposta}><Text style={styles.respostatxt}>{msg}</Text></View> 
        </View>
    );
}


/**
 * CLASSE TELA Menu Principal
 */
export default class Atividade extends Component {
    
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
                    <Text style={styles.title}>BÁSICO DA PRÁTICA</Text>
                </View>

                <View style={styles.divContent}>
                    <Text style={styles.subtitle}>Atividades</Text>
                    <Questao1/>
                    <Questao2 style={{marginBottom:20}}/>
                </View>
            </ScrollView>
        )
    }
  }
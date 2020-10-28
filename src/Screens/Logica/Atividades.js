/**
 * IMPORTS
 */
import React, {Component, useState} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
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
                <Text style={styles.aux2}>1) O algoritmo necessário para realizar um sistema de login - em padrões informais - é:</Text>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')} />
                    <View style={styles.aux}>
                        <Text style={styles.texto}>
                            1- Inserir dados{'\n'}
                            2- logar usuário{'\n'}
                            3- buscar dados da conta{'\n'}
                            4- verificar se os dados repassados estão corretos
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
                            1- Inserir dados{'\n'}
                            2- buscar dados da conta{'\n'}
                            3- logar usuário{'\n'}
                            4- verificar se os dados repassados estão corretos
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
                            1- Inserir dados{'\n'}
                            2- buscar dados da conta{'\n'}
                            3- verificar se os dados repassados estão corretos{'\n'}
                            4- logar usuário
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
                            1- buscar dados da conta{'\n'}
                            2- Inserir dados{'\n'}
                            3- verificar se os dados repassados estão corretos{'\n'}
                            4- logar usuário
                        </Text>
                    </View>
                </View>
            </View>
            
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao2} onPress={() => {
                    if(checked === 'first'){
                        setMsg('RESPOSTA ERRADA: O login de usuário deve ser o último passo a ser realizado. Portanto, terceira alternativa é correta.');
                    }
                    if(checked === 'second'){
                        setMsg('RESPOSTA ERRADA: A verificação de dados precisa ser feita antes de logar o usuário. Portanto, terceira alternativa é correta.');
                    }
                    if(checked === 'third'){
                        setMsg('RESPOSTA CERTA!');
                    }
                    if(checked === 'fourth'){
                        setMsg('RESPOSTA ERRADA: Sem que os dados sejam repassados, não é possível buscar dados da conta. Portanto, terceira alternativa é correta.');
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
                    <Text style={styles.aux2}>2) Por que programadores utilizam algoritmos antes de desenvolver?</Text>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')} />
                    <View style={styles.aux}><Text style={styles.texto}>Pois fornece um tempo estimado de tempo para a conclusão de sua aplicação.</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')} />
                    <View style={styles.aux}><Text style={styles.texto}>Pois deixa o projeto como um trabalho único e um objetivo a ser atingido.</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="third"
                        status={checked === 'third' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('third')} />
                    <View style={styles.aux}><Text style={styles.texto}>Pois decide quem realizará determinada tarefa.</Text></View>
                </View>
                <View style={styles.questao}>
                        <RadioButton
                        value="fourth"
                        status={checked === 'fourth' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('fourth')} />
                    <View style={styles.aux}><Text style={styles.texto}>Pois os algoritmos dividem o trabalho em etapas menores e organiza o roteiro do projeto.</Text></View>
                </View>
            </View>
            
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao3} onPress={() => {
                    if(checked === 'first'){
                        setMsg('RESPOSTA ERRADA: Os algorítmos não definem tempo nem data. Alternativa correta é a quarta.');
                    }
                    if(checked === 'second'){
                        setMsg('RESPOSTA ERRADA: Os algorítmos realizam papel contrário, dividem o projeto em partes menores. Alternativa correta é a quarta.');
                    }
                    if(checked === 'third'){
                        setMsg('RESPOSTA ERRADA: Os algorítmos não possuem esse papel. Alternativa correta é a quarta.');
                    }
                    if(checked === 'fourth'){
                        setMsg('RESPOSTA CERTA!');
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
export class Atividade extends Component {
    
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
                    <Text style={styles.title}>LÓGICA E ALGORÍTMOS</Text>
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
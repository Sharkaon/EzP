/**
 * IMPORTS
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import renderIf from './renderIf';
import styles from '../../Styles/stylesMenu';
import {Header} from '../../routes';

/**
 * CLASSE TELA Menu Principal
 */
export default class MainMenu extends Component {
    
    //faz com que a tela não apareça na gaveta do menu hamburguer
    static navigationOptions = ({ navigation }) => {
      return{
        drawerLabel: () => null
      }
    }

    state = {
      display1: false,
      display2: false,
      display3: false,
      display4: false,
    }
  
    alternar1 = () => {
      this.setState({
        display1: !this.state.display1
      })
    }
    
    alternar2 = () => {
      this.setState({
        display2: !this.state.display2
      })
    }
  
    alternar3 = () => {
      this.setState({
        display3: !this.state.display3
      })
    }
  
    alternar4 = () => {
      this.setState({
        display4: !this.state.display4
      })
    }
  
    render() {
        return (
            <ScrollView style={styles.containerMain}>
              <Header navigation={this.props.navigation}/>
              <View style={styles.titles}>
                <TouchableOpacity onPress={this.alternar1}>  
                    <Text style={styles.textTitle}>INTRODUÇÃO</Text>
                </TouchableOpacity>
              </View>
            {renderIf(this.state.display1)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('OqueScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat} > O que é?</Text>
                  <Text style={styles.mais}>+</Text>
              </View >
            </TouchableOpacity>
            )}
            {renderIf(this.state.display1)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('ImportanciaScreen')}}>
              <View style={styles.subcat}> 
                  <Text style={styles.textSubcat}>Importância</Text> 
                  <Text style={styles.mais}>+</Text> 
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display1)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('PratScreen')}}>
              <View style={styles.subcat}> 
                  <Text style={styles.textSubcat}>Programação na prática</Text> 
                  <Text style={styles.mais}>+</Text> 
              </View>
            </TouchableOpacity>
            )}

            <View style={styles.titles}>
            <TouchableOpacity onPress={this.alternar2}>
                <Text style={styles.textTitle}>LÓGICA E ALGORÍTMOS</Text>
            </TouchableOpacity>
            </View>
            {renderIf(this.state.display2)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('IntroducaoLogScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Lógica</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display2)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('AlgoritmosScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Algorítmos</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display2)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('AlgPratScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Algorítmos na prática</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display2)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('AtividadesLogScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Atividades</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}

            <View style={styles.titles}>
            <TouchableOpacity onPress={this.alternar4}>
                <Text style={styles.textTitle}>BÁSICO DA PROGRAMAÇÃO</Text>
            </TouchableOpacity>
            </View>
            {renderIf(this.state.display4)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('VariaveisScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Variáveis</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display4)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('CondicoesScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Condições</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display4)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('LacosScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Laços de repetição</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
            {renderIf(this.state.display4)(
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('AtividadesBasScreen')}}>
              <View style={styles.subcat}>
                  <Text style={styles.textSubcat}>Atividades</Text>
                  <Text style={styles.mais}>+</Text>
              </View>
            </TouchableOpacity>
            )}
      
            </ScrollView>
        )
    }
  }
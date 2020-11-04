/**
 * IMPORTS
 */

import React, {Component} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';

import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';

/**
 * TELA DE CADASTRO
 */
export default class Cadastrar extends Component {

  state = {
    email: '',
    password: '',
    error: false,
  }

  //Sistema de cadastro
  signin = async () => {
    const { email, password } = this.state;
    
    if(email != "" && password != ""){
      try {
        const user = await auth().createUserWithEmailAndPassword(email, password);
        this.props.navigation.navigate('MenuScreen');
        this.setState({error: false, password: '', email: ''});
        auth().onAuthStateChanged(function(user) {
          user.sendEmailVerification().then(function() {
            //email enviado
          }).catch(function(error) {
            //Alert.alert(error);
          });
        });
      }
      catch(err){
        //Alert.alert(err.message);
        this.setState({error: "Erro ao cadastrar."});
      }
    }
    else{
      this.setState({error: "Campos vazios!"});
    }

    
  }

  static navigationOptions = ({ navigation }) => {
    return{
      //faz com que a tela não apareça na gaveta do menu hamburguer
      drawerLabel: () => null,
      //faz com que não possa abrir o menu hamburger nessa página
      drawerLockMode: 'locked-closed'
    }
  }

  render () {
    return(
      <View style={{flex:1, backgroundColor:'#1c2b31'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Image style={{height: 70, width: 70}} source={require('../../Images/logo.jpg')} />
          <Image style={{height: 50, width: 125}} source={require('../../Images/textoLogo.jpg')} />
          <Text style={{fontSize:50, color:'#fff', marginTop:2}}>Crie uma Conta</Text>
        </View>
        <View style={{flex:1, justifyContent:'center', margin:10, alignItems:'center'}}>
          <TextInput
            style={{fontSize:20, backgroundColor: '#fff', width:300}}
            placeholder="Insira seu e-mail"
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
          />
          <TextInput
            style={{fontSize:20, backgroundColor: '#fff', width:300, marginTop:20}}
            placeholder="Insira sua senha"
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
          />
          
          <TouchableOpacity
          style={styles.botaoCadastro}
          onPress={this.signin}>
            <Text style={{color:'#fff', fontSize:30}}>Cadastrar</Text>
          </TouchableOpacity>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'#fff', fontSize:15, marginTop:8}}>{this.state.error}</Text>
          </View>
          <TouchableOpacity
          onPress={() => {
            //Alert.alert('Clicou em cadastrar');
            this.props.navigation.navigate("LoginScreen");
          }}>
            <Text style={{color:'#fff', fontSize:15, marginTop:8}}>Já possui conta? Entre aqui</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

/**
 * STYLES
 */
const styles = StyleSheet.create({
  botaoCadastro: {
    backgroundColor: '#a7934d',
    marginTop: 30,
    height:60,
    width: 325,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#fff'
  }
})
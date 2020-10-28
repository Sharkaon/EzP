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

import auth, { firebase } from '@react-native-firebase/auth';


/**
 * TELA DE LOGIN
 */
export default class Login extends Component {  


  constructor(){
    //Constructor roda quando a classe Login for instanciada e o super é necessário pra nn bugar
    super();

    if(!firebase.apps.length){
      firebase.initializeApp({
        apiKey:"AIzaSyDV1zmSBFn6Jr0zbqfReDEwWWiaqqBggFw",
        appId:"1:403362684910:android:ce0e03f79bc0d082d0f8ff",
        databaseURL:"https://eazyprogramming-118d5.firebaseio.com",
        storageBucket:"eazyprogramming-118d5.appspot.com",
        projectId: "eazyprogramming-118d5",
        messagingSenderId:"403362684910"
      });
    }

    
    }

  state = {
    email: '',
    password: '',
    error: false,
  }

  //Sistema de login
  login = async () => {
    const { email, password } = this.state;

    console.disableYellowBox = true; //-> disabilita warnings amarelos na tela

    if(email != "" && password != ""){
      try {
        const user = await auth().signInWithEmailAndPassword(email, password);
        this.props.navigation.navigate('MenuScreen');
        this.setState({error: false, password: '', email: ''});
      }
      catch(err){
        //Alert.alert(err.message);
        this.setState({error: "Erro ao logar. Email ou Senha Inválidos"});
      }
    }
    else{
      this.setState({error: "Campos vazios!"});
    }

  }

  onAuthStateChanged(user) {
    auth.setUser(user);
    //Alert.alert(user.email);
  }
  
  static navigationOptions = ({ navigation }) => {
    return{
      //faz com que a tela não apareça na gaveta do menu hamburguer
      drawerLabel: () => null,
      //faz com que não possa abrir o menu hamburger nessa página
      drawerLockMode: 'locked-closed'
    }
  };
  

  render () {
    return(
      <View style={{flex:1, backgroundColor:'#1c2b31'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Image style={{height: 70, width: 70}} source={require('../../Images/logo.jpg')} />
          <Image style={{height: 50, width: 125}} source={require('../../Images/textoLogo.jpg')} />
          <Text style={{fontSize:50, color:'#fff', marginTop:2}}>Conecte-se</Text>
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
          style={styles.botaoLogin}
          onPress={this.login}>
            <Text style={{color:'#fff', fontSize:30}}>Login</Text>
          </TouchableOpacity>

          <Text style={{color:'#fff', fontSize:15, marginTop:15, marginBottom:2}}>{this.state.error}</Text>

          <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CadastrarScreen');
          }}>
            <Text style={{color:'#fff', fontSize:15, marginTop:8}}>Não possui conta? Crie uma aqui</Text>
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
  botaoLogin: {
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
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
export default class RedefinirSenha extends Component {  

    state={
        email: '',
        message: ''
    }

    static navigationOptions = ({ navigation }) => {
        return{
          //faz com que a tela não apareça na gaveta do menu hamburguer
          drawerLabel: () => null,
          //faz com que não possa abrir o menu hamburger nessa página
          drawerLockMode: 'locked-closed'
        }
    }

    redefine = async () => {
        const {email} = this.state;
        if(email != ""){
            //Alert.alert(email)
                firebase.auth().sendPasswordResetEmail(email)
                .then(function() {
                    this.setState({message: 'Verifique seu e-mail.'});
                  })
                  .catch(function(error) {
                    this.setState({message: 'Ocorreu um erro.'});
                  });
                  this.setState({message: 'Verifique seu e-mail.'});
        }
        else{
            this.setState({message: 'Campo vazio!'});
        }
    }

    render(){
        return(
            <View style={{ flex: 1, backgroundColor: '#1c2b31', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 50, color: '#fff', marginTop: 2 }}>Alterar senha</Text>
                </View>
    
                <View style={{ flex: 1, justifyContent: 'center', margin: 10, alignItems: 'center' }}>
                    <TextInput
                        style={{ fontSize: 20, backgroundColor: '#fff', width: 300 }}
                        placeholder="Insira seu e-mail"
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={this.redefine}>
                        <Text style={{ color: '#fff', fontSize: 30 }}>Salvar</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#fff', fontSize:15, marginTop:15, marginBottom:2}}>{this.state.message}</Text>
                   
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
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

/**
 * TELA DE LOGIN
 */
export default class RedefinirSenha extends Component {  

    state={
        password: ''
    }

    update = async() => {
        const password = this.state;

        if(password != ""){

            auth().onAuthStateChanged(function(user) {
                if (user) {
                    user.UpdatePasswordAsync(password).ContinueWith(task => {
                        if (task.IsCanceled) {
                          Debug.LogError("UpdatePasswordAsync was canceled.");
                          return;
                        }
                        if (task.IsFaulted) {
                          Debug.LogError("UpdatePasswordAsync encountered an error: " + task.Exception);
                          return;
                        }
                    
                        Debug.Log("Password updated successfully.");
                      });
                } else {
                    //Alert.alert("deslogado");   
                }
            });
        }

        else{
            this.setState({error: "Campo Vazio!"});
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
                        placeholder="Insira sua nova senha"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TouchableOpacity
                    style={styles.botaoLogin}
                    onPress={this.update}>
                        <Text style={{ color: '#fff', fontSize: 30 }}>Salvar</Text>
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
/**
 * IMPORTS
 */
import React, { Component, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import StylesConta from '../../Styles/StylesConta';
import {Header} from '../../routes';

import auth, { firebase } from '@react-native-firebase/auth';

/**
 * TELA MENU HAMBURGUER
 */
export default class Sobre extends Component{

    state = {
        email: '',
        aux: ''
      }
    
    logOut = async () => {
        //auth().signOut();
        this.props.navigation.navigate('LoginScreen');
    }

    redefine = async () => {
        this.setState({email: 'Verifique seu e-mail para redefinir sua senha.'});
        auth().onAuthStateChanged(function(user) {
            auth().sendPasswordResetEmail(user.email).ContinueWith(task => {
                if (task.IsCanceled) {
                  //Alert.alert("SendPasswordResetEmailAsync was canceled.");
                  
                }
                else if (task.IsFaulted) {
                  //Alert.alert("SendPasswordResetEmailAsync encountered an error: " + task.Exception);
                }
                else{
                    this.setState({email:"Verifique seu e-mail para redefinir sua senha."});
                    //Alert.alert("Password reset email sent successfully.");
                }
              });
        });
    }

    render () {
        return(
            <View style={StylesConta.tela}>
                <Header navigation={this.props.navigation}/>
                <View style={StylesConta.main}>
                    <View style={StylesConta.usuarioBloco}>
                        <View style={StylesConta.circulo}>
                            <Image style={StylesConta.user} source={require('../../Images/UserIcon2.jpg')} resizeMode="contain"/>
                        </View>
                        <Text style={StylesConta.nome}>Nome do Usuário</Text>
                        <View style={StylesConta.infosBloco}>
                            <Text style={StylesConta.infos}>emailDoUsuario@gmail.com</Text>
                            <Text style={StylesConta.infos}>Senha: euOdeioRN</Text>
                        </View>
                    </View>

                    <View style={StylesConta.btnBloco}>
                        <Text style={{color:'#fff', fontSize:15, marginBottom:15}}>{this.state.email}</Text>
                        <TouchableOpacity
                        style={StylesConta.btn}
                        onPress={this.redefine}>
                            <Text style={StylesConta.textoBtn}>Trocar senha</Text>
                            <Image style={StylesConta.icon} source={require('../../Images/Cadeado.jpg')} resizeMode="contain"/>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={StylesConta.btn}
                        onPress={
                            this.logOut
                          }>
                            <Text style={StylesConta.textoBtn}>Sair da conta</Text>
                            <Image style={StylesConta.icon} source={require('../../Images/Login.jpg')} resizeMode="contain"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
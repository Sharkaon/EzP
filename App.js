/**
 * IMPORTS
 */
import React, { Component } from 'react';
import {
  Login,
  Cadastrar,
  Menu,
  MenuHeader,
  Sobre,
  Conta,
  Contato,
  RedefinirSenha,
  Oque,
  Importancia,
  Prat,
  IntroducaoLog,
  AlgoritmosLog,
  AlgPrat,
  AtividadesLog,
  Variaveis,
  Condicoes,
  Lacos,
  AtividadesBas
} from './src/routes';

import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Dimensions } from 'react-native';

/**
 * NAVEGAÇÃO ENTRE TELAS E FUNIONAMENTO DE GAVETA
 */
const AppContainer = createAppContainer(
  createDrawerNavigator(
    {
      LoginScreen: Login,
      CadastrarScreen: Cadastrar,
      MenuScreen: Menu,
      SobreScreen: Sobre,
      ContaScreen: Conta,
      ContatoScreen: Contato,
      RedefinirSenhaScreen: RedefinirSenha,
      OqueScreen: Oque,
      PratScreen: Prat,
      ImportanciaScreen: Importancia,
      IntroducaoLogScreen: IntroducaoLog,
      AlgoritmosScreen: AlgoritmosLog,
      AlgPratScreen: AlgPrat,
      AtividadesLogScreen: AtividadesLog,
      VariaveisScreen: Variaveis,
      CondicoesScreen: Condicoes,
      LacosScreen: Lacos,
      AtividadesBasScreen: AtividadesBas
    },
    {
      initialRouteName: 'LoginScreen',
      contentComponent: MenuHeader,
      drawerWidth: Dimensions.get('window').width,
      drawerPosition: 'right',
      drawerType: 'front'
    }
  )
);

/**
 * CLASSE PRINCIPAL
 */
export default class App extends Component {
  render() {
    return(
        <AppContainer/>
    );
  }
}
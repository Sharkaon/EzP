/**
 * IMPORTS
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Alert
} from 'react-native';
import StylesConta from '../../Styles/StylesContato';
import {Header, StylesContato} from '../../routes';

/**
 * TELA MENU HAMBURGUER
 */
export default class Sobre extends Component{
    
    render () {
        return(
            <View style={StylesContato.tela}>
                <Header navigation={this.props.navigation}/>
                <View style={StylesContato.aluno}>
                    <View style={StylesContato.circulo}>
                        <Image style={StylesContato.img} source={require('../../Images/diogo.jpg')} resizeMode="contain"/>
                    </View>
                    <View style={StylesContato.txtArea}>
                        <Text style={StylesContato.title}>Diogo Krupp Engelmann</Text>
                        <Text style={StylesContato.infos}>Escola Técnica Estadual Monteiro Lobato</Text>
                        <Text style={StylesContato.infos}>diogo-kengelmann2@educar.rs.gov.br</Text>
                    </View>
                </View>

                <View style={StylesContato.aluno2}>
                    <View style={StylesContato.circulo}>
                        <Image style={StylesContato.img} source={require('../../Images/monteiro.jpg')} resizeMode="contain"/>
                    </View>
                    <View style={StylesContato.txtArea}>
                        <Text style={StylesContato.title}>Artur Kontz Pinto Monteiro</Text>
                        <Text style={StylesContato.infos}>Escola Técnica Estadual Monteiro Lobato</Text>
                        <Text style={StylesContato.infos}>artur-kpmonteiro@educar.rs.gov.br</Text>
                    </View>
                </View>

                <View style={StylesContato.footer}>
                    <Text style={StylesContato.fone}>(51) 3542-1309</Text>
                </View>
            </View>
        )
    }
}
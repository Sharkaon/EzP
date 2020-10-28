/**
 * IMPORTS
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import {Header, StylesMenuHeader} from '../routes';

/**
 * TELA MENU HAMBURGUER
 */
export default class MenuHeader extends Component{
    
    render () {
        return(
            <View style={{flex: 1}}>
                <Header navigation={this.props.navigation}/>
                <View style={StylesMenuHeader.listItem}>
                    <TouchableOpacity style={StylesMenuHeader.containerItem} onPress={() => {this.props.navigation.navigate('ContaScreen')}}>
                        <View style={StylesMenuHeader.item}>
                            <View style={StylesMenuHeader.imagens}>
                                <View style={StylesMenuHeader.blocosImg}>
                                    <Image style={{height: 40, width: 40}} source={require('../Images/UserIcon.jpg')} resizeMode="contain"/>
                                </View>
                                <View style={StylesMenuHeader.blocos}>

                                </View>
                            </View >
                            <View style={StylesMenuHeader.textos}>
                                <View style={StylesMenuHeader.blocosTit}>
                                    <Text style={StylesMenuHeader.titulo}>Sua conta</Text>
                                </View>
                                <View style={StylesMenuHeader.blocosDesc}>
                                    <Text style={StylesMenuHeader.descricao}>Configurações de conta</Text>
                                </View>
                            </View>
                        </View>  
                    </TouchableOpacity>
                    <TouchableOpacity style={StylesMenuHeader.containerItem} onPress={() => {this.props.navigation.navigate('SobreScreen')}}>
                        <View style={StylesMenuHeader.item}>
                            <View style={StylesMenuHeader.imagens}>
                                <View style={StylesMenuHeader.blocosImg}>
                                    <Image style={{height: 40, width: 40}} source={require('../Images/WhoIcon.jpg')} resizeMode="contain"/>
                                </View>
                                <View style={StylesMenuHeader.blocos}>

                                </View>
                            </View >
                            <View style={StylesMenuHeader.textos}>
                                <View style={StylesMenuHeader.blocosTit}>
                                    <Text style={StylesMenuHeader.titulo}>Sobre nós</Text>
                                </View>
                                <View style={StylesMenuHeader.blocosDesc}>
                                    <Text style={StylesMenuHeader.descricao}>Quem nós somos</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={StylesMenuHeader.containerItem} onPress={() => {this.props.navigation.navigate('ContatoScreen')}}>
                    <View style={StylesMenuHeader.item}>
                            <View style={StylesMenuHeader.imagens}>
                                <View style={StylesMenuHeader.blocosImg}>
                                    <Image style={{height: 40, width: 40}} source={require('../Images/EmailIcon.jpg')} resizeMode="contain"/>
                                </View>
                                <View style={StylesMenuHeader.blocos}>

                                </View>
                            </View >
                            <View style={StylesMenuHeader.textos}>
                                <View style={StylesMenuHeader.blocosTit}>
                                    <Text style={StylesMenuHeader.titulo}>Contato</Text>
                                </View>
                                <View style={StylesMenuHeader.blocosDesc}>
                                    <Text style={StylesMenuHeader.descricao}>Nosso e-mail</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flex:1, backgroundColor:'#333333'}}>
                </View>
            </View>
        )
    }
}
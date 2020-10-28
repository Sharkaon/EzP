/**
 * IMPORTS
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import StylesSobre from '../../Styles/StylesSobre';
import {Header} from '../../routes';

/**
 * TELA MENU HAMBURGUER
 */
export default class Sobre extends Component{
    
    render () {
        return(
            <View>
                <Header navigation={this.props.navigation}/>
                <View style={StylesSobre.tiraMargin}>
                    <ScrollView>
                        <View style={StylesSobre.main}>
                            
                            <View style={StylesSobre.aluno}>
                                <View style={StylesSobre.bloco1}>
                                    <View style={StylesSobre.circulo}>
                                    <Image style={StylesSobre.user} source={require('../../Images/diogo.jpg')} />
                                    </View>
                                </View>
                                <View style={StylesSobre.bloco2}>
                                    <Text style={StylesSobre.nome}>Diogo Krupp Engelmann</Text>
                                    <Text style={StylesSobre.escola}>Escola Técnica Estadual Monteiro Lobato</Text>
                                </View>
                                <View style={StylesSobre.bloco3}>
                                    <Text style={StylesSobre.texto}>
                                        Diogo é um dos desenvolvedores do EzP. Tem 17 anos e atualmente cursa 
                                        o terceiro ano do ensino médio junto ao curso técnico em infomática
                                         no CIMOL. Pretende se formar cientista da computação.
                                    </Text>
                                </View>
                            </View>



                            <View style={StylesSobre.aluno2}>
                                <View style={StylesSobre.bloco1}>
                                    <View style={StylesSobre.circulo}>
                                    <Image style={StylesSobre.user} source={require('../../Images/monteiro.jpg')} />
                                    </View>
                                </View>
                                <View style={StylesSobre.bloco2}>
                                    <Text style={StylesSobre.nome}>Artur Kontz Pinto Monteiro</Text>
                                    <Text style={StylesSobre.escola}>Escola Técnica Estadual Monteiro Lobato</Text>
                                </View>
                                <View style={StylesSobre.bloco3}>
                                    <Text style={StylesSobre.texto}>
                                        Artur é o outro desenvolvedore do EzP. Tem 17 anos e atualmente cursa 
                                        o terceiro ano do ensino médio junto ao curso técnico em infomática
                                         no CIMOL. Pretende se formar cientista da computação.
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
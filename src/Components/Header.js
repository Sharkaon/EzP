/**
 * IMPORTS
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from '../Styles/stylesMenu';


/**
 * COMPONENTE DE CABEÇALHO
 */
export default class Header extends Component{
    
    render () {
        return(
            <View style={styles.header}>
                <View style={{marginLeft:15, height: 75, width: 110}}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('MenuScreen')}} style={styles.cem}>
                        <Image source={require('../Images/textoLogo_semFundo.png')} 
                        style={styles.cem} resizeMode="contain"></Image>
                    </TouchableOpacity>
                </View>
                
                
                <View style={styles.coluna}>
                    <TouchableOpacity 
                    style={styles.cem} onPress={() => {this.props.navigation.toggleDrawer()}}>
                        <Image source={require('../Images/hamb.png')} style={styles.cem} resizeMode="contain"></Image>
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}
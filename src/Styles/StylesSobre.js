/**
 * IMPORTS
 */
import {StyleSheet, Dimensions} from 'react-native';

/**
 * ESTILIZAÇÃO TELA SOBRE
 */
const styles = StyleSheet.create({
  
  main:{
    height: Dimensions.get('window').height*2,
    backgroundColor: '#4d87a7'
  },

  aluno:{

      height: Dimensions.get('window').height-70,
      alignItems:'center',
      width: Dimensions.get('window').width-80,
      marginLeft:40,
  },

  aluno2:{
      backgroundColor:'blue',
      height: Dimensions.get('window').height-70,
      alignItems:'center',
      width: Dimensions.get('window').width-80,
      marginLeft:40,
  },

  tela:{
    backgroundColor:'red',
  },

  bloco1:{
    flex:3,
    width:'100%',
    backgroundColor:'#4d87a7',
    justifyContent:'center',
    alignItems:'center',
  },

  bloco2:{
    backgroundColor:'#4d87a7',
    flex:1,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    borderBottomColor:'#fff',
    borderBottomWidth:1
  },

  bloco3:{
    flex:4,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#4d87a7'
  },

  circulo:{
      borderRadius:100,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      height: 140,
      width: 140
  },

  user:{
    borderRadius:100,
    height: 128,
    width: 128
  },

  nome:{
    fontSize:25,
    color:'#fff',
    paddingBottom:20
  },

  escola:{
    color:'#fff',
    marginBottom:30,
    fontSize: 17
  },

  texto:{
      color: '#fff',
      fontSize:23,
      textAlign:'auto',
      lineHeight: 30,
      marginBottom: 30
  },

  tiraMargin:{
      marginTop:-15
  }

});

export default styles;
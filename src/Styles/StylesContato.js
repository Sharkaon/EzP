/**
 * IMPORTS
 */
import {StyleSheet, Dimensions} from 'react-native';

/**
 * ESTILIZAÇÃO TELA SOBRE
 */
const styles = StyleSheet.create({

  tela:{
    backgroundColor:'#4d87a7',
    flex:1
  },
  
  aluno:{
    flex: 5,
    marginTop:-15,
    justifyContent:'center',
    alignItems:'center',
  },

  infos:{
    color:'#fff',
    fontSize: 17
  },

  txtArea:{
    marginTop:15,
    alignItems:'center',
  },

  title:{
    fontSize: 20,
    color:'#fff',
    marginBottom:15
  },

  aluno2:{
    flex: 5,
    justifyContent:'center',
    alignItems:'center',
  },

  circulo:{
    borderRadius:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    height: 115,
    width: 115
  },

  img:{
    borderRadius:100,
    height: 108,
    width: 108
  },

  footer:{
    flex: 1,
    alignItems:'center',
  },

  fone:{
    color:'#fff',
    fontSize: 17
  }
  

});

export default styles;
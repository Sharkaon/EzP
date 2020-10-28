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
  
  main:{
      flex:1,
      backgroundColor:'#4d87a7',
      width: Dimensions.get('window').width-80,
      marginLeft:40,
  },

  usuarioBloco:{
      flex: 4,
      marginTop:-15,
      justifyContent:'center',
      alignItems:'center',
      borderBottomColor:'#fff',
      borderBottomWidth:1
  },

  btnBloco:{
    flex: 3,
    justifyContent:'center',
    alignItems:'center',
  },

  circulo:{
    borderRadius:100,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    height: 130,
    width: 130
  },

  user:{
    borderRadius:100,
    height: 118,
    width: 118
  },

  nome:{
    fontSize:25,
    color:'#fff',
    marginTop:15
  },

  infos:{
    color:'#fff',
    fontSize: 17
  },

  infosBloco:{
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center',
  },

  btn:{
    backgroundColor: '#305f70',
    height:60,
    width: 325,
    borderRadius:40,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'#fff',
    marginBottom:20,
    flexDirection: "row"
  },

  textoBtn:{
    color:'#fff',
    fontSize:27,
    marginLeft:15
  },

  icon:{
      height:30,
      width:30,
      marginLeft:15
  }

});

export default styles;
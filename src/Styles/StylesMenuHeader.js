/**
 * IMPORTS
 */
import {StyleSheet} from 'react-native';

/**
 * ESTILIZAÇÃO MENU HAMBURGUER
 */
const styles = StyleSheet.create({
  listItem:{
    flex: 1,
    backgroundColor: '#333333',
    marginTop: -15
  },
  titulo: {
    color: '#ffffff',
    fontSize: 17,
    marginTop:3
  },
  item:{
    borderBottomColor:'#b8a1a1',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: "row"
  },
  containerItem:{
    flex: 1
  },
  descricao:{
    color: '#c7cece',
    fontSize: 15,
    marginTop:3
  },
  textos:{
    flex: 5
  },
  imagens:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  blocos:{
    flex: 3,
    justifyContent:'center'
  },
  blocosTit:{
    flex: 1,
    justifyContent:'center',
    marginLeft: 10
  },
  blocosDesc:{
    flex: 1,
    marginLeft: 10
  },
  blocosImg:{
    flex: 4,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default styles;
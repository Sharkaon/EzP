import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  
    tela:{
        backgroundColor:'#445961',
        flex: 1,
    },

    divTitle:{
        backgroundColor:'#212830',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:40
    },

    title:{
        color:'#fff',
        fontSize: 27,
        paddingBottom: 15,
        paddingTop: 15
    },

    divContent:{
        alignItems:'center',
    },

    subtitle:{
        color:'#fff',
        fontSize: 27,
        borderBottomColor:'#fff',
        borderBottomWidth:1,
        marginBottom: 20
    },

    texto:{
        color:'#fff',
        fontSize:20,
        textAlign:'justify',
    },

    botao: {
        backgroundColor: '#a7934d',
        marginTop: 90,
        height:60,
        width: 325,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'#fff'
      },

      botao2: {
        backgroundColor: '#a7934d',
        marginTop: 20,
        height:60,
        width: 325,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'#fff'
      },

      botao3: {
        backgroundColor: '#a7934d',
        marginTop: 40,
        height:60,
        width: 325,
        borderRadius:40,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:3,
        borderColor:'#fff'
      },

      opcoes:{
        marginTop:15,
        marginBottom:15,
        flex: 4,
        marginLeft:'10%',
      },

      questao:{
        flexDirection: "row",
        width:'80%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
      },

      btn:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
      },

      aux:{
        width:'100%',
        marginLeft:'10%',
        justifyContent:'center',
        alignItems:'center',
      },

      resposta:{
        marginTop:30,
        marginBottom:30,
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
      },

      respostatxt:{
        color:'#a7934d',
        fontSize:20,
        textAlign:'justify',
        marginLeft:'10%'
      },

      pergunta:{
          width:'90%',
      },

      aux2:{
        color:'#fff',
        fontSize:20,
        textAlign:'justify',
      }


});

export default styles;
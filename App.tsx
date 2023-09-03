import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testo} >KHOZA DEV</Text>
      <StatusBar style="light" />
      <View style={styles.cartao}>
        <View>
          <Text>Usuario:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Email:</Text>
          <TextInput keyboardType='email-address' style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Senha:</Text>
          <TextInput secureTextEntry={true} style={styles.input}></TextInput>
        </View>

        <View>
          <Text>Confirme Senha:</Text>
          <TextInput secureTextEntry={true} style={styles.input}></TextInput>
        </View>

        <TouchableOpacity>
          <Text style={styles.butao1}>registrar</Text>
        </TouchableOpacity>
        

        <TouchableOpacity>
          <Text style={styles.butao2}>Ja tens uma conta?</Text>
        </TouchableOpacity>
        

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5076a5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartao:{
    color:'#fff',
    marginTop:5,
    padding:15,
    height:280,
    width:220,
    borderRadius:12,
    backgroundColor:'#1212',
  },

  testo:{
    fontSize:14,
    fontStyle:'normal',
    fontWeight:'800'
  },

  input:{
    border:0,
    paddingLeft:9,
    borderRadius:12,
    backgroundColor:'#ADD8E6',
  },

  butao1:{
    border:0,
    textAlign:'center',
    borderRadius:12,
    paddingBottom:4,
    backgroundColor:'#ADD8E6',
    marginTop:10,
  },

  butao2:{
    border:0,
    color:'blue',
    marginTop:7,
  },
});

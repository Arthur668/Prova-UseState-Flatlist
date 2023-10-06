import { StyleSheet, } from 'react-native';
import { useState } from 'react';

import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {

  const [nome,setnome] = useState("")
  const [dtnsc,setdtnsc] = useState("")
  const [endereço,setendereço] = useState("")
  const [cpf,setcpf] = useState("")


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
        <View style={styles.inputs}>

      <input style={styles.nome} 
      type='text' 
      value={nome} 
      onChange={(e)=> setnome(e.target.value)}
      placeholder='Nome'>
      </input>

      <input style={styles.nome}
      type='text' 
      value={dtnsc} 
      onChange={(e)=> setdtnsc(e.target.value)}
      placeholder='Data de nascimento'>
      </input>

      <input style={styles.nome} 
      type='text' 
      value={endereço} 
      onChange={(e)=> setendereço(e.target.value)}
      placeholder='Endereço'>
      </input>

      <input style={styles.nome} 
      type='text' 
      value={cpf} 
      onChange={(e)=> setcpf(e.target.value)}
      placeholder='CPF'>
      </input>

        </View>

        <button onClick={()=>console.log(nome,cpf,endereço,dtnsc)}>Cadastre-se</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  inputs:{
    display:'flex',
    marginBottom:10
  },
  nome:{
    marginBottom:10
  }
});

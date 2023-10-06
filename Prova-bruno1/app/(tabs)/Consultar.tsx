import { StyleSheet,TouchableOpacity, } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';

export default function TabTwoScreen() {

 

  const Pacintes = [
    {
      id: '1',
      nome: 'Arthur',
      dia:'29/11/23',
      horario:'14:30',
      valor:'R$150,00'
    },
    {
      id: '2',
      nome: 'Patricia',
      dia:'10/10/23',
      horario:'15:30',
      valor:'R$250,00'
    },
    {
      id: '3',
      nome: 'José',
      dia:'12/11/23',
      horario:'13:00',
      valor:'R$100,00'
    },
    {
      id: '4',
      nome: 'Bruno',
      dia:'4/11/23',
      horario:'16:00',
      valor:'R$200,00'
    },
  
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultar</Text>
    <SafeAreaView>

     <FlatList
     data={Pacintes}
     keyExtractor={item => item.id}
     renderItem={({item})=><Text>Nome:{item.nome} - Dia:{item.dia} - Horario:{item.horario} - Valor:{item.valor}</Text>}
     ></FlatList>

    </SafeAreaView>
      
      <button>Editar dados</button>
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
});

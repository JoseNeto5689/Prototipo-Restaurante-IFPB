import React,{useEffect, useState} from 'react'; 
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
//

export default function App() {
    const [dados, setDados] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(
      () => {
        fetch('http://192.168.0.105:3000/stock')
        .then((resp) => resp.text())
        .then((text) => { setDados(text) })
        .catch(() => { alert("Erro!") })
        .finally(() => { setLoading(false)})
      }, [])

    
  return (
    <View style={styles.container}>
      <StatusBar/>
      {
        loading ? <ActivityIndicator/> : <Text>{dados}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
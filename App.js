import React,{useEffect, useState} from 'react'; 
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Product from './components/product';
const Requests = require("./controllers/request-control")

//Aplicar o moment no Product

export default function App() {
    const [dados, setDados] = useState()
    const [loading, setLoading] = useState(true)
    useEffect( () => {Requests.list(setDados, setLoading)} , [])

    
  return (
    <View style={styles.container}>
      <StatusBar/>
      {
        loading ? <ActivityIndicator/> : <Product obj = { dados[3] } />
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